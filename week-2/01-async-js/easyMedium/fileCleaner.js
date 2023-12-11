const { error } = require("console")
let fs = require("fs")
fs.readFile("text.txt", "Utf-8",(error , data)=>{
    let abc = 'hello     world    my    name   is       raman'
    data = data.split('')
    console.log(data);
    let newArr = []
    for (let index = 0; index < data.length; index++) {
        if(!(data[index] == " "  && data[index+1] == " ")){
               newArr.push(data[index])
        }
    }
    abc = newArr.join('')
    fs.writeFile("text.txt",abc,(error)=>{})
})