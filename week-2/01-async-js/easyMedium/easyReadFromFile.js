const { error } = require("console")
let fs = require("fs")
fs.readFile("test.txt", "Utf-8",(error , data)=>{
    console.log(data);
})