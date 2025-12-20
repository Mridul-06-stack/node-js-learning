const http=require("http");
const  fs=require("fs");
const server=http.createServer((req,res) => {
    console.log("Request received");
    fs.appendFile("log.txt",`request received at ${Date.now().toString()}\n`, (err) => {
        if (err) throw err;
    });
    res.end("Hello from my first Node.js server!");
})
server.listen(3000, () => {
    console.log("Server is running on port 3000");
    
});