import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryContext } from '../../context/CatContext'
import { ProductContext } from '../../context/ProContext'
import { addProduct } from '../../functions/http/http'
import { getCategoryName } from '../../functions/http/http'

export default function ProductCreate() {
  const navigate = useNavigate()
  const context = useContext(ProductContext)

  useEffect(() => {
    async function getAllNames() {
      const catnames = await getCategoryName()
    }
    getAllNames()
  }, [])

  const [newProduct, setNewProduct] = useState({
    productname: "",
    description: "",
    unitprice: "",
    categoryid: "",
    vatid: "",
    unitid: "",

  })
  const createProduct = () => {
    addProduct(newProduct)
      .then((res) => {
        if (res) {
          alert("Yeni ürün eklendi!")
        }
        navigate("/products/list")
      })
  }
  const onChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
  }
  return (
    <div className="row">
      <div className="col-md-5">
        <label>Ürün Adı</label>
        <input className="form-control" type="text" value={newProduct.productname} name="productname" onChange={onChange}
        />
        <label>Fiyat</label>
        <input className="form-control" type="text" value={newProduct.unitprice} name="unitprice" onChange={onChange}
        />
        <label>Açıklama</label>
        <input className="form-control" type="text" value={newProduct.description} name="description" onChange={onChange}
        />
        <label>Kategori</label>
        {/* <input className="form-control"type="text" value={newProduct.categoryid} name="categoryid" onChange={onChange}
            /> */}
        <select name="cats" id="cats">
          {context.catnames?.map((c) => {
            return (
              <option value={c.id} >{c.description}</option>
            )
          })}
          {/* <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option> */}
        </select> <br />
        <label>Vergi</label>
        <input className="form-control" type="text" value={newProduct.vatid} name="vatid" onChange={onChange}
        />
        <label>Birim</label>
        <input className="form-control" type="text" value={newProduct.unitid} name="unitid" onChange={onChange}
        />
        <input className="btn btn-success" style={{ marginTop: "10px" }} type="submit" value="Ürün Ekle" onChange={onChange} onClick={() => createProduct()}
        />
      </div>
    </div>
  )
}
