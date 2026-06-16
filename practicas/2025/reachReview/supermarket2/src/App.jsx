import { useState } from 'react'
import './App.css'

function App() {
  const categories = [
    "Groceries", "Beverages", "Dairy", "Bakery", "Meat & Seafood",
    "Frozen Foods", "Snacks", "Produce", "Household", "Personal Care", "Cleaning Supplies"
  ]

  const [form, setForm] = useState({name:"", price:"", category: categories[0]})
  const [list, setList] = useState([])
  const [currentId, setCurrentId] = useState(0)

  const addProduct = () => {
    e.preventDefault()
    const newProduct = {
      id: currentId,
      name: form.name,
      price: form.price,
      category: form.category
    }
  }

  const handleDates = () => {
    const {name, value} = e.target
    setForm({... form, [name]: value})
  }

  return (
    <>
    <form onSubmit={addProduct}>
      <input name="name"type="text" onChange={handleDates}/>
      <input name="price"type="number" min={0} onChange={handleDates}/>
      <select name="category" id="" onChange={handleDates}></select>
      </form>
    </>
  )
}

export default App
