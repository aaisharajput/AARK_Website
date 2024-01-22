import express from "express";
import path from "path";

const Router = express.Router();

Router.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})

export { Router as NOTFOUND };
