const path = require('path')
console.log('=============================================\n')
console.log("Directory(Folder) Name is",__dirname);
console.log('=============================================')
console.log("File Name is",__filename);

// If You want to create path
const filePath =  path.join("folder","students","data.txt");
console.log(filePath);

// You can pass String in below functions
// str = "MyFolder/MyFile1/MyFile2/MyFile3.txt"
const parseData = path.parse(filePath)
const resolvedPath = path.resolve(filePath)//Provide absolute path from beginning
const baseName = path.basename(filePath)
const dirName = path.dirname(filePath)

console.log("Parse Data:\n",parseData)
console.log("ResolvedPath is:\n",resolvedPath)
console.log("BaseName is:\n",baseName)
console.log("Directory Name is:",dirName)