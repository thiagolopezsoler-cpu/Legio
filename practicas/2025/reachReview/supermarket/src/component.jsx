
import { useOutletContext } from 'react-router-dom'
import React, { useState } from 'react'



const Component = () => {
    const [list, setList] = useOutletContext()

    const categories = [
        "others", "Groceries", "Beverages", "Dairy", "Bakery", "Meat & Seafood",
        "Frozen Foods", "Snacks", "Produce", "Household", "Personal Care", "Cleaning Supplies"
    ]

    // Estados
    // const [list, setList] = useState([])               // lista de productos
    const [filteredList, setFilteredList] = useState(false) // mostrar solo categoria seleccionada
    const [searchCategory, setSearchCategory] = useState("") // categoria para filtrar
    const [form, setForm] = useState({ name: "", price: "", category: categories[0] })
    const [currentId, setCurrentId] = useState(0)

    // Manejar cambios del form
    const handle = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    // Agregar producto
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
        setForm({ name: "", price: "", category: categories[0] })
    }

    // Eliminar producto
    const deleteProduct = (id) => {
        setList(list.filter(product => product.id !== id))
    }

    // Marcar comprado/no comprado
    const boughtOrNot = (id) => {
        setList(list.map(product =>
            product.id === id ? { ...product, bought: !product.bought } : product
        ))
    }

    // Determinar que productos mostrar
    const productsToShow = filteredList
        ? list.filter(product => product.category === searchCategory)
        : list

    return (
        <div>
            {/* Lista de productos */}
            <div className="product-list">
                {productsToShow.map(product => (
                    <div key={product.id} className="list-item">
                        <p>{product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        <button
                            className={product.bought ? "bought-btn" : "to-buy-btn"}
                            onClick={() => boughtOrNot(product.id)}
                        >
                            {product.bought ? "Bought" : "To Buy"}
                        </button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Component