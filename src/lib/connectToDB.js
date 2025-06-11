import mongoose from "mongoose";
import { NextResponse } from "next/server";

const MONGO_URI = process.env.MONGO_URI;
let isConnected = false;

export const connectToDB = async () => {
    if(isConnected) return;
    try {
        await mongoose.connect(MONGO_URI);
        isConnected = true;
        console.log("Database Connected")
    } catch (err) {
        console.error(err.message);
    }
}