import React,{useState,useEffect, useContext} from 'react'
import { getProducts } from '../../functions/http/http'
import {useNavigate} from 'react-router-dom'
import { ProductContext } from '../../context/Context'

export default function ProductList() {
    const  navigate = useNavigate()
    const context = useContext(ProductContext)

    useEffect(()=>{
        async function getAllProducts(){
            const products = await getProducts()
            context.setProduct(products)
            console.log(products)
        }
        getAllProducts()
    },[])

  return (
    <div  className='row'>
        <div className='col-md-7'>
            <button className='btn btn-primary'
            onClick={()=> navigate("/products/create")}
            >Yeni Ürün</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>Ürün Adı</th>
                    <th>Açıklama</th>
                    <th>Fiyat</th>
                    {/* <th>Kategori</th>
                    <th>Birim</th>
                    <th>Kdv</th> */}
                 
                </tr>
            </thead>
            <tbody>
                {context.products.map(b => {
                    return ( 
                        <tr>
                            <td>{b.productname}</td>
                            <td>{b.description}</td>
                            <td>{b.unitprice}</td>
                            {/* <td>{b.categoryid}</td>
                            <td>{b.unitid}</td>
                            <td>{b.vatid}</td> */}
                            

                            {/* <td>
                               <button
                            className='btn btn-success'
                            onClick={()=>
                            navigate("/book/update" +b.id,{
                                state: {id: b.id}
                            })}
                           >Update</button> 
                            </td> */}
                            <td>
                                <button 
                                className='btn btn-success' 
                                onClick={() => 
                                    navigate("/products/update/", {
                                        state: {id : b.id},
                                    })}> Update Product </button>
                            </td>
                            
                        </tr>                     
                    )

                })}

            </tbody>
        </table>
        </div>
        </div>
   
  )
}
