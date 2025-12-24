const express=require('express');
const app=express();
const port=3000;  
const fs=require('fs'); 
const users=require("./MOCK_DATA.json")
app.use(exxpress.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.send("Hello World!");
});
app.get("/api/users",(req,res)=>{
    res.json(users);
});
app.get("/users",(req,res)=>{
    res.send(
        
        `
        <h1>Users List</h1>
        <ol>
        ${users.map(user=>{return `<li>${user.first_name}</li>`}).join('')}
        </ol>`
    );
});
app.get("/users/:id",(req,res)=>{
    const id= req.params.id;
    const user= users.find(u=>u.id==id);
    res.json(user);
})
app.post("/api/users",(req,res)=>{
    const mess=req.body;
    users.push(...mess,users.length+1);

        fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
            if(err){
                console.log("Error writing file",err);
            }
        });
    res.send("POST request to the users");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});