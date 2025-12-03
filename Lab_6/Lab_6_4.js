const http = require('http');
const fs = require('fs');

const PORT = 4800
let server = http.createServer((req,res)=>{
    let filename = ''
    if(req.url == '/'){
        filename = 'home.txt';
    }else if(req.url == '/about'){
        filename = 'about.txt';
    }else if(req.url == '/contact'){
        filename = 'contact.txt';
    }else if(req.url == '/info'){
       filename = 'Information.txt';
    }
    try{
        var data = fs.readFileSync(filename,'utf-8');
        res.end(data);
    }catch(error){
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(4800,()=>{
    console.log(`Server run At PORT ${PORT}`);
})