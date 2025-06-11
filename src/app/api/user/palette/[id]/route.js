import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/connectToDB";
import { Palette } from "@/models/palette.model";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    await connectToDB();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    await Palette.findByIdAndDelete(id);
    user.savedPalettes.pull(id);
    await user.save();
    return NextResponse.json({ message: 'Palette deleted successfully' }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
