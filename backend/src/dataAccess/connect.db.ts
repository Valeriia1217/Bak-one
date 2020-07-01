import mongoose from "mongoose";

export const connectMongo = () => {
    mongoose.connect("mongodb+srv://root:root@cluster0.hhtqr.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('БД подключена.')
};
