import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db.js"

function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const addCart = (guitar) => {
    const guitarExist = cart.findIndex(item => item.id == guitar.id)
    if (guitarExist < 0) {
      guitar.quantity = 1
      setCart([...cart, guitar])
    } else {
      const updateCart = [...cart]
      updateCart[guitarExist].quantity++
      setCart(cart)
    }
  }
  return (
    <>
      <Header
        cart={cart}
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
