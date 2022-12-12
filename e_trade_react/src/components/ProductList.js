import React,{useState,useEffect} from 'react'
import { addProduct, getProducts } from '../functions/http/http'

export default function ProductList() {
    const [apiString, setApiString]= useState("")

    useEffect(()=>{
        async function getAllProducts(){
            const product = await getProducts()
            setApiString(product[0].productname)
        }
        getAllProducts()
    },[])

    const [newProduct,setNewProduct]=useState({
        productname:"",
        description:"",
        unitprice:"",
        categoryid:"",
        vatid:"",
        unitid:"",

    })
    const createProduct = ()=> {
        addProduct(newProduct)
        .then((res)=>{
            alert ("Yeni ürün eklendi!")
            console.log(newProduct)
        })
    }
    const onChange = (event)=> {
        setNewProduct({...newProduct,[event.target.name]:event.target.value})
    }
  return (
    <div className="row">
          <div className="col-md-5">
            <label>Ürün Adı</label>
            <input className="form-control" type="text" value={newProduct.productname} name="productname"onChange={onChange}
            />
            <label>Fiyat</label>
            <input className="form-control" type="text"value={newProduct.unitprice} name="unitprice"onChange={onChange}
            />
            <label>Açıklama</label>
            <input className="form-control"type="text" value={newProduct.description} name="description" onChange={onChange}
            />
             <label>Kategori</label>
            <input className="form-control"type="text" value={newProduct.categoryid} name="categoryid" onChange={onChange}
            />
             <label>Vergi</label>
            <input className="form-control"type="text" value={newProduct.vatid} name="vatid" onChange={onChange}
            />
             <label>Birim</label>
            <input className="form-control"type="text" value={newProduct.unitid} name="unitid" onChange={onChange}
            />
            <input className="btn btn-success" type="submit" value="Update" onChange={onChange} onClick={() => createProduct()}
            />
          </div>
        </div>
  )
}
