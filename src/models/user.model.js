import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    savedPalettes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Palette'
        }
    ],
    savedColors : [
        {
            type: String
        }
    ],
},
{
    timestamps: true
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);