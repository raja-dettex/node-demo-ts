import express, { Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.get("/", (req: Request, res: Response)=> {
    res.send("welcome to home");
});
let port!:number;
(process.env.NODE_ENV == 'development')?port=3000:port=4000;

app.listen(3000, ()=> {console.log("app is spawned up on port " + port)})