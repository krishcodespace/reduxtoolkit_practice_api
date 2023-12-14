import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../app/features/productSlice';

function Product() {

  const dispatch = useDispatch();

  const  {productData, isLoading, error} = useSelector((state)=> state?.productSlice)

  console.log('productData', productData,  isLoading, error)

    useEffect(()=>{
    dispatch(fetchData())
    console.log('useeefect run')
    },[dispatch])

  return (
    <div>Product</div>
  )
}

export default Product