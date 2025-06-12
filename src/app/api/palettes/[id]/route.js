import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/connectToDB";
import { Palette } from "@/models/palette.model";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const { id } = await params;
    await connectToDB();
    const palette = await Palette.findById(id);
    palette.likes = palette.likes + 1;
    palette.save();
    const newPalette = await Palette.create({
      user: user._id,
      colors: palette.colors,
    });
    user.savedPalettes.push(newPalette._id);
    await user.save();
    return NextResponse.json(
      { message: "Liked And Saved The Palette" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
