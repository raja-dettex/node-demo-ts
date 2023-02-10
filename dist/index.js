"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("welcome to home");
});
let port;
(process.env.NODE_ENV == 'development') ? port = 3000 : port = 4000;
app.listen(3000, () => { console.log("app is spawned up on port " + port); });
