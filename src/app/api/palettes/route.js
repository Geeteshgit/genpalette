import { Palette } from "@/models/palette.model";

export async function GET() {
    try {
        await connectToDB();
        
        const palettes = await Palette.find({ user: null }).sort({ likes: -1 });
        return NextResponse.json({ palettes }, { status: 200 });

    } catch (err) {
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}