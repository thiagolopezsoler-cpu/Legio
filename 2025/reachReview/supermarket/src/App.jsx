import { useState } from 'react'
import './App.css'

function App() {
const categories = ["Groceries", "Beverages", "Dairy", "Bakery", "Meat & Seafood", "Frozen Foods", "Snacks", "Produce", "Household", "Personal Care", "Cleaning Supplies"]

  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState(false)
  const [form, setForm] = useState({ name: "", price: "", category: "" })
  // const [searchCategory, setSearchCategory] = useState("")
  const [currentId, setCurrentId] = useState(0)

  const handle = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const addProduct = (e) => {
    e.preventDefault()
    const newProduct = {
      id: currentId,
      name: form.name,
      price: `$${form.price}`,
      category: form.category,
      bought: false
    }
    setList([...list, newProduct])
    setCurrentId(prev => prev + 1)
    setForm({ name: "", price: "", category: "" }) // limpiar form
  }

  const deleteProduct = (id) => {
    setList(list.filter(product => product.id !== id))
  }

  const boughtOrNot = (id) => {
    setList(
      list.map(product =>
        product.id === id ? { ...product, bought: !product.bought } : product
      )
    )
  }

  // const search = (categ) => {
  //   const filtered = list.filter(product => product.category === categ)
  //   setFilteredList(filtered)
  //   // console.log(filtered) // aca si vas a ver los productos
  // }

  return (
    <>
      <h1>Supermarket</h1>
      <form className='inputs' onSubmit={addProduct}>
        <input name="name" type="text" onChange={handle} required value={form.name}/>
        <input name="price" type="number" min={0} onChange={handle} required value={form.price}/>
        <select name="category" onChange={handle} required value={form.category}>
          <option value="groceries">Groceries</option>
          <option value="beverages">Beverages</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat-seafood">Meat & Seafood</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="snacks">Snacks</option>
          <option value="produce">Produce</option>
          <option value="household">Household</option>
          <option value="personal-care">Personal Care</option>
          <option value="cleaning-supplies">Cleaning Supplies</option>
        </select>
        <button type='submit'>Add</button>
      </form>

      <select onChange={(e) => setSearchCategory(e.target.value)}>
        <option value="groceries">Groceries</option>
        <option value="beverages">Beverages</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat-seafood">Meat & Seafood</option>
        <option value="frozen-foods">Frozen Foods</option>
        <option value="snacks">Snacks</option>
        <option value="produce">Produce</option>
        <option value="household">Household</option>
        <option value="personal-care">Personal Care</option>
        <option value="cleaning-supplies">Cleaning Supplies</option>
      </select>
      <button onClick={() => filteredList = !filteredList}>search</button>

      {list.map(filteredList ? list.filter(product => product.category == categ) : product => (
        <div key={product.id} className="list-item">
          <p>{product.name}</p>
          <p>Price: {product.price}</p>
          <p>ID: {product.id}</p>
          <button
            className={product.bought ? "bought-btn" : "to-buy-btn"}
            onClick={() => boughtOrNot(product.id)}
          >
            {product.bought ? "bought" : "to buy"}
          </button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App
