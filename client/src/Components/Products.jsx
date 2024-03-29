import { useState } from "react";
import styled from "styled-components"
import { Product } from "./Product";
import axios  from "axios"
import { useEffect } from "react";
import { popularProducts } from "../data";
import { Link } from "react-router-dom";


const Container = styled.div`
        padding: 20px;
        display: flex;
        flex-wrap : wrap; 
        justify-content: space-between;

`;

export const Products = ({cat,filters,sort}) => {
 

  console.log(cat,filters,sort)
        const [products, setProducts] = useState([]);
        const [filteredProducts, setFilteredProducts] = useState([]);
      useEffect (()=>{
          const getProducts = async () =>{
            try{
              const res = await axios.get( cat? `http://localhost:8000/api/products?category=${cat}` : "http://localhost:8000/api/products");
              console.log(res)
              //setProducts(res.data);
            }catch (err) {}
          }; 
            getProducts()
      }, [cat]);
 
      useEffect(()=>{
          cat && setFilteredProducts(
            products.filter((item)=> Object.entries(filters).every(([key,value])=>
                item[key].include(value)
            )
          )
      );
      },[products, cat , filters]);

      useEffect(()=> {
        if(sort === "newest") {
          setFilteredProducts((prev)=>
              [...prev].sort((a,b)=> a.createdAt - b.createdAt)
          );
         } else if (sort === "asc") {
            setFilteredProducts((prev)=>
                [...prev].sort((a,b)=> a.price - b.price)
            );
        } else  {
          setFilteredProducts((prev)=>
              [...prev].sort((a,b)=> b.price - a.price)
          );
        }
        
      },[sort]);
 
  return (
    <Container> 
      
          {popularProducts.map((item)=>(
              
              <Product item={item} key={item.id } />

          ))}
        {cat 
        ? filteredProducts.map((item ) =>  <Product item= {item}  key={item.id}/>)
        : products.slice(0,8).map((item)=> <Product item={item}  key={item.id} />)}
  
      
        </Container>
        
  );
};
