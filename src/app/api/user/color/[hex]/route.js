import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/connectToDB";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const session = await auth();
        if (!session) {
          return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const { hex } = await params;
        await connectToDB();
    
        const user = await User.findOne({ email: session.user.email });
        if (!user) {
          return NextResponse.json({ message: "User not found!" }, { status: 404 });
        }
    
        user.savedColors.pull(hex);
        await user.save();
        return NextResponse.json({ message: 'Color deleted successfully' }, { status: 200 });
      } catch (err) {
        return NextResponse.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
      }
}