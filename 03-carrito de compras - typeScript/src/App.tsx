
import Guitar from "./components/Guitar"
import Header from "./components/Header.js"
import { useCart } from "./hooks/useCart.ts"

function App() {

  const { cart, data, removeItem, increaceQuantity, decrementQuantity, clearCart, addCart } = useCart()



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
