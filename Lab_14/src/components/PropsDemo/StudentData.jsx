import React from 'react'
import Demo from './Demo'

const StudentData = () => {
    //We can Pass value,object,arr also as props

    var myInfo = {
        "name":"Raj",
        "University":"Darshan University",
        "age":23,
        "email":"Raj@123Gmail.com"
    }
    var arr = [10,35,30,40]
  return (
    <>
    {/* <Demo name="Raj"/> */}
    {/* <Demo data={myInfo}/> */}
    <Demo val={arr}/> 
    </>
  )
}

export default StudentData