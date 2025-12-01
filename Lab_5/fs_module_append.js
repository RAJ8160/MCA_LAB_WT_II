const fs = require('fs')
const path = require("path");

const fileName = 'test.txt'
const filePath = path.join(__dirname,fileName)

// const fileData = fs.appendFileSync(filePath,"\nThis is Demo of Append File.","utf-8")
// console.log(fileData)

/* This is async delete file
const fileDelete = fs.unlink(filePath,(err) => {
    if (err) {
        console.error("Error deleting file:", err);
        return;
    }
   console.log("File deleted successfully!");
 })
 */
if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log("File deleted successfully");
} else {
    console.log("File does not exist");
}
console.log(fileDelete)