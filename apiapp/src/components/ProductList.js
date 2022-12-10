import { get } from 'jquery'
import React, { useEffect,useState } from 'react'
import {getProducts} from '../functions/http/http'

export default function ProductList() {

  const [apiString, setApiString]= useState()

    
    useEffect(() => {
        async function getAllProducts() {
            const product = await getProducts();
            setApiString(product[1].description)
        }
        getAllProducts()
    },[])
  return (
    <>
    <h1>{apiString}</h1>
    </>
  )
}

