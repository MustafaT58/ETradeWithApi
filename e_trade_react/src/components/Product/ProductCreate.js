import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct, getProducts } from '../../functions/http/http'

export default function ProductCreate() {
    const [apiString, setApiString]= useState("")
    const navigate = useNavigate()

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
            if (res) {
                alert ("Yeni ürün eklendi!")
            }
            navigate("/products/list")
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
            <input className="btn btn-success"  style={{marginTop: "10px"}} type="submit" value="Ürün Ekle" onChange={onChange} onClick={() => createProduct()}
            />
          </div>
        </div>
  )
}
