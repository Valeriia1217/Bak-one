import express from 'express';
import *  as bodyParser from 'body-parser';
import {connectMongo} from "./dataAccess/connect.db";
import {router} from "./features/user";

require('dotenv').config();
connectMongo();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()
});
app.use("/", router);
app.listen("1010", () => {
    console.log("Сервер запущен!");
});
