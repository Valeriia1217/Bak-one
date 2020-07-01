import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    password: {
        type: String, required: true,
    }
});

interface IUser {
    name: string,
    password: string,
}

interface UserModel extends IUser, mongoose.Document {
}

export const UserModel = mongoose.model<UserModel>("user", UserSchema);
