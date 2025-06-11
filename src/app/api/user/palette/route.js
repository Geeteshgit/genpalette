import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/connectToDB";
import { Palette } from "@/models/palette.model";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectToDB();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const palettes = await Palette.find({ user: user._id }).sort({ createdAt: -1 });
    return NextResponse.json({ palettes }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const palette = await req.json();
    await connectToDB();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const savedPalette = await Palette.create({
      user: user._id,
      colors: palette,
    });

    user.savedPalettes.push(savedPalette._id);
    await user.save();

    return NextResponse.json({ savedPalette }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}