import mongoose, { Schema } from "mongoose";
import validator from "validator";

interface IUser extends Document {
    _id: string,
    name: string,
    email: string,
    photo: string,
    role: "user" | "admin",
    gender: "male" | "female",
    dob: Date,
    createdAt: Date,
    updatedAt: Date,
    age: number; //vitual attribute

}

const userSchema = new Schema(
    {
        _id: {
            type: String,
            required: [true, "Please enter ID"],
            unique: true,
        },
        name: {
            type: String,
            required: [true, "Please enter Name"]
        },
        email: {
            type: String,
            required: [true, "Please enter Email"],
            unique: [true, "Email already Exist"],
            validator: validator.default.isEmail
        },
        photo: {
            type: String,
            required: [true, "Please add Photo"],
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        gender: {
            type: String,
            enum: ["male", "female"],
            required: [true, "Please enter gender"]
        },
        dob: {
            type: Date,
            required: [true, "Please select the date of birth"]
        }
    },
    { timestamps: true, }
);

userSchema.virtual("age").get(function () {
    let today = new Date();
    let dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()) {
        age--;
    }
    return age;
})

export const User = mongoose.model<IUser>("User", userSchema);