import React ,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryContext } from '../../context/CatContext'
import { getCategories } from '../../functions/http/httpCat'


export default function CategoriesList() {
  const navigate = useNavigate()
  const context = useContext(CategoryContext)

  useEffect(() => {
    async function getAllCategories() {
      const categories = await getCategories()
      context.setCategory(categories)

    }
    getAllCategories()
  }, [])


  return (
    <div className='row'>
      <div className='col-md-7'>
        <button className='btn btn-primary'
          onClick={() => navigate("/categories/create")}> Yeni Kategori</button>
        <table className='table'>
          <thead>
            <tr>
              <th>Kategori No</th>
              <th>Kategori Adı</th>
            </tr>
          </thead>
          <tbody>
            {context.categories.map(b => {
              return (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.description}</td>

                  {/* <td>
                    <button className='btn btn-success' onClick={() =>
                      navigate("/categories/Update", {
                        state: { id: b.id },
                      })
                    }>Kategori Güncelle </button>
                  </td> */}
                  {/* <td>
                    <button className='btn btn-danger' onClick={() => deleteCategory(b.id)
                      .then(() => {
                        alert("Ürün Silindi")
                        navigate("/")
                      })
                    }>Ürün Sil</button>
                  </td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
