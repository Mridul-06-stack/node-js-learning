const express=require('express');
const app=express();
const port=3000;  
const users=require("./MOCK_DATA.json")
app.get("/",(req,res)=>{
    res.send("Hello World!");
});
app.get("/users",(req,res)=>{
    res.json(users);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});