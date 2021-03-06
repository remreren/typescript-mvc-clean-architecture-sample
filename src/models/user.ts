import {Schema, model} from "mongoose";

const User = new Schema({
    name: {
        type: String,
        required: [true, "first name is required"]
    },
    surname: {
        type: String,
        required: [true, "last name is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        unique: [true, "password is required"]
    },
    secret: {
        type: Schema.Types.ObjectId,
        auto: true
    }
}, {
    timestamps: true,
    collection: "users"
});

export default model("User", User);