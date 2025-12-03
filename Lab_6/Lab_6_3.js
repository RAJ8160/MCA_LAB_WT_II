let http = require('http')
let PORT = 4800

const server = http.createServer((req,res)=>{
    let path = req.url
    console.log(path)
    res.writeHead(200,{"content-type":"text/html"});
    if(path == '/'){
        res.write('<h1>This is Home Page</h1>');
    }else if(path == '/about'){
        res.write('<h1>This is About Page</h1>');
    }else if(path == '/contact'){
        res.write('<h1>This is Contact Page.</h1>');
    }else if(path == '/info'){
        res.write('<h1>This is Information page.</h1>')
    }else{
        res.write('<h5>This is other page.</h5>')
    }
    res.end();
});
server.listen(4800,()=>{
    console.log(`Server run at port ${4800}`);
})