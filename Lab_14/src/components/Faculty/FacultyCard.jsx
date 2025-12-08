import React from 'react'

const FacultyCard = (props) => {
  console.log(props);
  return (
   <div className="card" style={{width: "18rem"}}>
    <img src={props.data.Avatar} className="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title">Experience:{props.data.Experience}</h5>
      <h5 className="card-title">Position:{props.data.Position}</h5>
      <h5 className="card-title">Email:{props.data.Email}</h5>
      <h5 className="card-title">Phone:{props.data.Phone}</h5>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
  )
}

export default FacultyCard