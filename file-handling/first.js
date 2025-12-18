const fs =require("fs");
const data=fs.appendFileSync("hello.txt","\nThis is my first file handling code in Node.js");
console.log("File has been created and data has been appended.");