const url=require("url");
const http =require("http");
const fs=require("fs");
const server=http.createServer((req,res) => {
    if(req.url==="/favicon.ico"){
        return res.end();
    }
    const parsedUrl=url.parse(req.url,true);
    fs.appendFile("url_log.txt",`URL requested: ${parsedUrl.href} at ${Date.now().toString()}\n`, (err) => {
        if (err) throw err;
    });
    console.log("URL requested: ", parsedUrl);
    res.end(`You requested the URL: ${parsedUrl.pathname}`);
});
server.listen(4000, () => {
    console.log("Server is running on port 4000");  
});