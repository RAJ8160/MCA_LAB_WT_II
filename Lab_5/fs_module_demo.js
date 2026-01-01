//The fs module is a built-in Node.js core module used to create, read, write, update, and delete files and directories.
// _______________________________________________________________

//!syntaxt : fs.writeFileSynce(filePath,data,options)
//? filePath : The file path to write to.
//? data: the content to write to the file.
//? options :Optinal. Includes encoding ('utf-8'),mode,or flage
// If file is not exsits it create new file
//_________________________________________________________________
const fs = require('fs')
const path = require("path");


const fileName ='test.html'
const filePath = path.join(__dirname,fileName)

 const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Page</title>
</head>
<body>
    <h1>This is the initial Data</h1>
</body>
</html>
`;

const writeFile =fs.writeFileSync(filePath,"This is initial text.",'utf-8');

// const writeFile =fs.writeFileSync(fileName,htmlTemplate,'utf-8');

console.log(writeFile)




