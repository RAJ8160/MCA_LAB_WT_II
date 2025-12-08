import React from 'react'

const Demo = (props) => {
  console.log(props)
  //you can check like comment another and uncomment one which you want ot check same in pass side when you pass in props.
  return (
    <>
    <h1>This is Props Demo.</h1>
    {/* <div>I pass name in Prop.My Name is {props.name}</div> */}
    {/* <div>I can pass object in Prop like this.My Name is {props.data.name}</div> */}
    {props.val.map((ele)=>(
      // <h1>{ele*2}</h1>
      // <h1>{ele/2}</h1>
      <h1>{ele**2}</h1>
    ))}
    </>
  )
}

export default Demo