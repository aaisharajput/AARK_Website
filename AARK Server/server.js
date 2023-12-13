import express from "express";
import session from "express-session";
import cors from 'cors';
import {init} from './Models/db.js';
// import {IndexRoutes} from "./Routes/IndexRoutes.js";
// import cookieParser from "cookie-parser";

const app = express();
const port = 3000;
app.use(express.static('./media'));
app.use(express.static('./'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({secret:"AarkGlobal@12#3",resave:false,saveUninitialized:true,}));

// app.use('/User',IndexRoutes);

init().then((result)=>{
    console.log(result)
    app.listen(port,()=>{console.log("port no.: ",port);});
}).catch(err=>console.log(err))

