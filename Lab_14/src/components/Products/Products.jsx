import React from 'react'
import ProductCard from './ProductCard'
const ProductData =[
  {
    "name": "Wireless Headphones",
    "description": "High-quality wireless headphones with noise cancellation.",
    "price": 14999,
    "image": "https://picsum.photos/id/180/400/300"
  },
  {
    "name": "Gaming Laptop",
    "description": "Powerful gaming laptop with RTX graphics.",
    "price": 85000,
    "image": "https://picsum.photos/id/1084/400/300"
  },
  {
    "name": "Smart Watch",
    "description": "Water-resistant smartwatch with health tracking.",
    "price": 22999,
    "image": "https://picsum.photos/id/1062/400/300"
  },
  {
    "name": "Bluetooth Speaker",
    "description": "Portable speaker with premium bass sound.",
    "price": 7999,
    "image": "https://picsum.photos/id/237/400/300"
  },
  {
    "name": "DSLR Camera",
    "description": "Professional-level DSLR camera for photography lovers.",
    "price": 56000,
    "image": "https://picsum.photos/id/250/400/300"
  },
  {
    "name": "Office Chair",
    "description": "Ergonomic chair for long working hours.",
    "price": 12000,
    "image": "https://picsum.photos/id/9/400/300"
  },
  {
    "name": "Smartphone",
    "description": "Latest smartphone with AMOLED display.",
    "price": 32000,
    "image": "https://picsum.photos/id/100/400/300"
  },
  {
    "name": "Sneakers",
    "description": "Comfortable sneakers suitable for daily wear.",
    "price": 4999,
    "image": "https://picsum.photos/id/21/400/300"
  },
  {
    "name": "Washing Machine",
    "description": "Fully automatic washing machine with inverter technology.",
    "price": 28000,
    "image": "https://picsum.photos/id/1074/400/300"
  },
  {
    "name": "Electric Guitar",
    "description": "High-quality electric guitar with a smooth finish.",
    "price": 35000,
    "image": "https://picsum.photos/id/103/400/300"
  }
]
// 3. Display Products stored in array using ReactJS which price are more then 20000.


const Products = () => {
    const totalPrice = ProductData.reduce((sum, item) => sum + item.price, 0);
    return (
        <div className='container'>
            <h2>Total Price: ₹{totalPrice}</h2>
            <div><h1>This is Products Details</h1></div>
            <div className='p-3 d-flex flex-row justify-content-between flex-wrap d-grid gap-3'>
                {ProductData.filter(elem=>elem.price>20000).map(function getProductDetails(elem) {
                    return <ProductCard data={elem} />
                })}
            </div>
        </div>
    )
}

export default Products