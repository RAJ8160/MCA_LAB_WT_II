//The path module is a built-in (core) Node.js module used to work with file and directory paths in a platform-independent way (Windows, Linux, macOS).
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
const parseData = path.parse(filePath)// Returns an object with path details.
const resolvedPath = path.resolve(filePath)//Provide absolute path from beginning
const baseName = path.basename(filePath) // Returns the last portion of a path (file name).
const dirName = path.dirname(filePath) //Returns the directory name of a path.
const fileExtension = path.extname(filePath) //Returns the file extension.

console.log("Parse Data:\n",parseData)
console.log("ResolvedPath is:\n",resolvedPath)
console.log("BaseName is:\n",baseName)
console.log("Extension is : \n",fileExtension)

console.log("Directory Name is:",dirName)
