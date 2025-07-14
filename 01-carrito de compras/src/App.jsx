import { useEffect, useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db.js"

function App() {

  const getLocal = ()=>{
    const cartLocal = localStorage.getItem("cart")
    return cartLocal? JSON.parse(cartLocal) : []
  }

  const [data] = useState(db)
  const [cart, setCart] = useState(getLocal)

  const maxItem = 10
  const minItem = 1

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addCart = (guitar) => {
    const guitarExist = cart.findIndex(item => item.id == guitar.id)
    if (guitarExist < 0) {
      guitar.quantity = 1
      setCart([...cart, guitar])
    } else {
      if (cart[guitarExist].quantity < maxItem) {
        const updateCart = [...cart]
        updateCart[guitarExist].quantity++
        setCart(updateCart)
      }
    }
  }

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const increaceQuantity = (id) => {
    const updateCart = cart.map(item => {
      if (item.id == id && item.quantity < maxItem) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })

    setCart(updateCart)
  }


  const decrementQuantity = (id) => {
    const updateCart = cart.map(item => {
      if (item.id == id && item.quantity > minItem) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }

      return item
    })

    setCart(updateCart)
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <>
      <Header
        cart={cart}
        removeItem={removeItem}
        increaceQuantity={increaceQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(item => (
            <Guitar
              key={item.id}
              guitar={item}
              addCart={addCart}

            />
          ))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
