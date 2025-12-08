import React from 'react'

const StudentCard = (props) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.stuData.avatar} style={{width:'150px'}}className='rounded-circle p-3 mx-auto d-block'/>
                <div className="card-body">
                    <h5 className="card-title">Name:{props.stuData.Name}</h5>
                    <p className="card-text">RollNumber:{props.stuData.RollNumber}</p>
                    <p className="card-text">Phone:{props.stuData.Phone}</p>
                    <p className="card-text">Address:{props.stuData.Address}</p>
                    <p className="card-text">City:{props.stuData.City}</p>
                    <p className="card-text">Year:{props.stuData.Year}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default StudentCard