import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';

const Home = () => {

const [products, setProducts] = useState([]);

const getProducts=()=>{
    axios.get('https://dummyjson.com/products/category/smartphones')
    .then(res => {
        console.log(res)
        setProducts(res.data.products)
    })
}
useEffect(()=>{
    
getProducts()
}, [])



  return (
    <div style={{width:'90%', display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center', gap:'30px'}}>
        {products.map(item => <ProductCard item={item} />)}
 
     {/* <FontAwesomeIcon icon= {faHeart}/> */}
      
    </div>
  )
}

export default Home