import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/connectToDB";
import { Palette } from "@/models/palette.model";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDB();
        
        const palettes = await Palette.find({ user: null }).sort({ likes: -1 });
        return NextResponse.json({ palettes }, { status: 200 });

    } catch (err) {
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        // const session = await auth();
        // if (!session) {
        //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        // }
        const palettes = await req.json();
        await connectToDB();
        
        if(Array.isArray(palettes[0])) {
            const docs = palettes.map((colors) => ({ colors }));
            await Palette.insertMany(docs);
        } else {
            await Palette.create({
                colors: palettes
            })
        }

        return NextResponse.json({ palettes }, { status: 200 });

    } catch (err) {
        console.error(err.message);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

