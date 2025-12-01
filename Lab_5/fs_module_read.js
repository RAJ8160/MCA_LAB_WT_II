const fs = require('fs')
const path = require("path");

const fileName = 'test.txt'
const filePath = path.join(__dirname,fileName)
const fileData = fs.readFileSync(filePath);
//console.log(fileData);//If you Write like this this give you data in binary Form

console.log(fileData.toString())//Way-1 to read file data Properly

// Way-2  const fileData = fs.readFileSync(filePath,"utf-8");