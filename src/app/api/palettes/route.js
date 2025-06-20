import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/connectToDB";
import { generateAIPalettes } from "@/lib/generatePaletteFromPrompt";
import { Palette } from "@/models/palette.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const palettes = await Palette.find({ user: null }).sort({ likes: -1 });
    return NextResponse.json({ palettes }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectToDB();
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { prompt } = await req.json();
    if (!prompt)
      return NextResponse.json({ message: "Prompt required" }, { status: 400 });
    const palettes = await generateAIPalettes(prompt);

    if (!palettes) {
      return NextResponse.json({ message: "Failed to generate palettes" }, { status: 500 });
    }
    
    const generatedPalettes = palettes.map((colors) => ({ colors }));

    const savedPalettes = await Palette.insertMany(generatedPalettes);

    return NextResponse.json({ generatedPalettes: savedPalettes }, { status: 201 });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
