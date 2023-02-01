const fs = require("fs");

// /create file
module.exports.CreateFile = () =>{
    fs.writeFileSync('./files/data.txt',"Hii, My name is Ansh")
};

// /rename file
var oldPath = './files/data.txt'
var newPath = './files/data1.txt'
module.exports.RenameFile = () =>{
    fs.renameSync(oldPath,newPath)
};