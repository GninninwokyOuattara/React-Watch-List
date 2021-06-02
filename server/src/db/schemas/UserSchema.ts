import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default:
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    },
});

const User = mongoose.model("User", UserSchema);

export default User;
