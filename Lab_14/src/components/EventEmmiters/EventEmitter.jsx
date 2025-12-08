import React from 'react'

// When you handle events in react js like clicking button Typing in text box  react wrap native browser events in somthing called SynthaticEvent.
//Synthatic eevnts for cross browser compatibility and providing consistent handling across different elements and Browsers.
const EventEmitter = () => {

  // function handleButtonClick(){
  //   alert('Hey I am onClick Event');
  // }

  const handleButtonClick = (event) =>{
    console.log(event)//you can see that you get SyntheticBaseEvent it need for our events work correctly in all Browsers
    console.log(event.target)
    console.log(event.type);
    alert('Hey I am onClick Event');
  }

  const handleWelcomeUser = (name)=>{
     alert(`Hey ${name}, Welcome!`);
  }
  return (
     <div className='flex d-flex gap-2'>
     {/* /* Function components with Named Components */
      // Rember how we haven't called this function , if you call this function here then it will run whithout even clciking.
      // you just need to pass reference and not call here. */}
     }
      <button className='btn btn-primary btn-sm' onClick={handleButtonClick}>Click Me</button>
      <br />
      <button className='btn btn-success' onClick={(event)=>handleButtonClick(event)}>Click me 2</button>
      <br />
      {/* Passing Arguments to Event Handlers */}
      <button  className='btn btn-warning' onClick={(event)=>handleWelcomeUser("Vinod")}>ClickMe</button>
     </div>
  )
}

export default EventEmitter