const express =require("express");
const app=express();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsup');
};

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});
app.get("/",(req,res)=>{
    res.send("hello world");
});