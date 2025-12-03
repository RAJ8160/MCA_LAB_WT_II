//It use for build event Driven System in Node.js
const EventEmitter = require('events');//Import EventEmitter class
const { userInfo } = require('os');

//Create an instance of EventEmitter 
const emitter = new EventEmitter();

//1.Define an event listener (addListener)
emitter.on("greet",()=>{
    console.log('Hello Namaste');
});

//2/Trigger (event) the "greet" event
emitter.emit("greet");

//We can also pass argumants with emitting.
emitter.on("greet",(userName)=>{
    console.log(`Hello Namaste ${userName}`);
});

emitter.emit("greet","abc");

//but best idea to take a single argumant as an object
emitter.on("greet",(arg)=>{
    console.log(`Hello Namaste ${arg.userName},Last Name is ${arg.lastName}`);
});

emitter.emit("greet",{userName:"abc",lastName:"def"});

//get Array of Registered Events
console.log(emitter.eventNames());

//get Count oF emite
console.log(emitter.listenerCount("greet"));

emitter.removeListener("greet", ()=>{
    console.log('Hello Namaste');
});//Removing an event listener at runtime:

emitter.once('login', () => {
    console.log("User logged in for the first time!");
});

emitter.emit('login');  // runs
emitter.emit('login');  // ignored