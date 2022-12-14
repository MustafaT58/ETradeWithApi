import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCategories } from '../../functions/http/httpCat';

export default function CategoriesUpdate() {
    const navigate=useNavigate();
    const lacation=useLocation()
    const [selectedCategory,setSelectedCategory]=useState({
        description:"",
    })
    
    useEffect(()=>{
        getCategories(location.state.id).then((res)=>{
            setSelectedCategory(res.data)
        })
    },[])

    const onChange=(event)=>{
        setSelectedCategory({...selectedCategory,[event.target.name]:event.target.value})
    }

    const updateCategory=()=>{
        updat
    }
  return (
    <div>CategoriesUpdate</div>
  )
}
