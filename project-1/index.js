const express=require('express');
const app=express();
const port=3000;  
const fs=require('fs'); 
const users=require("./MOCK_DATA.json")
app.use(express.urlencoded({extended:false}));
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
    mess.id=Number(users.length)+1;
    users.push(mess);  
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err){
            console.log("Error writing file",err);
        }
    });
    // users.push(...mess,id=Number(users.length)+1);

    //     fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
    //         if(err){
    //             console.log("Error writing file",err);
    //         }
    //     });
    console.log(mess);
    res.send("POST request to the users");
});
app.delete("/api/users/:id",(req,res)=>{
    const id=req.params.id;
    const index=users.indexOf(users.find(u=>u.id==id));  
    if(index!==-1){
        users.splice(index,1);     
    }
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err){
            console.log("Error writing file",err);
        }       
    res.send(`User with id ${id} deleted`);
}); 
});
app.patch("/api/users/:id",(req,res)=>{ const id=req.params.id;  const data=req.body; 
    const user=users.find(u=>u.id==id);
    
    const index=users.indexOf(user);
    if(!user){
        res.status(404).send("User not found");
        return;
    }
    for(let val in users[index]){
        for(let key in data){
            if(val===key){
                users[index][val]=data[key]; 
            }

 
 }}    
 console.log(users[index]);

 fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err){
            console.log("Error writing file",err);
               }});
    res.send(`User with id ${id} updated  `, users[index]);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});