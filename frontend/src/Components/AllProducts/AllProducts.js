import React from 'react'
import './AllProducts.css'
import img1 from '../../Assets/fruits.svg'
import img2 from '../../Assets/meat.svg'
import img3 from '../../Assets/vegitable.svg'
import img4 from '../../Assets/bevarages.svg'
import img5 from '../../Assets/fish.svg'
import img6 from '../../Assets/snacks.svg'

import axios from 'axios'
import { useEffect, useState } from 'react'

const AllProducts = () => {

    //const [products, setProducts] = useState("");

         
    // useEffect(()=>{
    //     const fetchdata = async ()=>{
    //         const data= await axios.get("/products/get");
    //         setProducts(data);            
    //     }
    //     fetchdata();
    // },[])


  return (
   
    <div className='categoryheader'>
    <h1>Featured Products</h1>
    <div className='homecategories'>
               
        <div className='container' >
            <img src={img1}></img>
            <h3>Fruits</h3>
        </div>
        <div className='container'>
            <img src={img2}></img>
            <h3>Meat</h3>
        </div>
         <div className='container'>
            <img src={img3}></img>
            <h3>Vegitables</h3>
        </div>
        <div className='container'>
            <img src={img4}></img>
            <h3>bevarages</h3>
        </div>   
        <div className='container'>
            <img src={img5}></img>
            <h3>bevarages</h3>
        </div>  
        <div className='container'>
            <img src={img6}></img>
            <h3>bevarages</h3>
        </div> 
        <div className='container'>
            <img src={img6}></img>
            <h3>bevarages</h3>
        </div> 
        <div className='container'>
            <img src={img6}></img>
            <h3>bevarages</h3>
        </div> 
        <div className='container'>
            <img src={img6}></img>
            <h3>bevarages</h3>
        </div> 
        <div className='container' >
            <img src={img1}></img>
            <h3>Fruits</h3>
        </div>
        <div className='container'>
            <img src={img6}></img>
            <h3>bevarages</h3>
        </div>   
        <div className='container' >
            <img src={img1}></img>
            <h3>Fruits</h3>
        </div>
        <div className='container'>
            <img src={img6}></img>
            <h3>bevarages</h3>
        </div> 
    </div>
    
    </div> 
   
        )
        

  
}

export default AllProducts