const http = require('http');
const PORT =4800;

const server = http.createServer((req,res)=>{
        // res.setHeader("Content-Type","text/plain");
        res.setHeader("Content-Type","text/html");//whothout this you can only work woth <h1></h1>
        res.write('<h1>This is Heading one.</h1>');
        res.write('<h2>This is Heading two.</h2>');
        res.write('<h3>This is Heading three.</h3>');
        res.write('<h4>This is Heading four.</h4>');
        res.write('<h5>This is Heading five.</h5>');
        // process.exit(1);
        res.end()
})// server is also Event Emitter

server.listen(PORT,()=>{
    console.log(`Server Run at port ${PORT}`);
})