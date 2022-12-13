import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CategoriesList() {
    const navigate=useNavigate()
    const context=useContext(CatwgoryContext)

  return (
    <div>CategoriesList</div>
  )
}
