let http = require('http')
let PORT = 4000
http.createServer((req,res)=>{
    res.write("Hello MCA\n");
    res.end('Hello World in NodeJs\nThis is Our First Server.');
    // process.exit(1);// use can exit programme using this also if you commit above line you see that your website reloded continuously whenever you end your response
}).listen(4000,()=>{
    console.log(`Server run at Port ${PORT}`);
});