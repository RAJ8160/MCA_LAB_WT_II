import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Product Name:{props.data.name}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <p className='card-text'>Price:{props.data.price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default ProductCard