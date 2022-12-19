import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addCategory } from '../../functions/http/httpCat'

export default function CategoriesCreate() {
    const navigate = useNavigate()

    const [newCategory,setNewCategory] = useState({
        description:"",
    })
    const createCategory = () => {
        addCategory(newCategory)
        .then((res)=>{
            if (res){
                alert ("Yeni Kategori Eklendi!")
            }
            navigate("/categories/list")
        })
    }

    const onChange = (event)=> {
        setNewCategory({...newCategory,[event.target.name]:event.target.value})
        
    }
    

  return (
    <div className="row">
        <div className='col-md-5'>
        <label>Kategori Adı</label>
        <input className='form-control' type="text" value={newCategory.description} name="description" onChange={onChange}></input>
        </div>
        <input className="btn btn-success"  style={{marginTop: "10px"}} type="submit" onKeyDown={onChange} value="Ürün Ekle" onChange={onChange} onClick={() => createCategory()}/>
        
    </div>
  )
}
