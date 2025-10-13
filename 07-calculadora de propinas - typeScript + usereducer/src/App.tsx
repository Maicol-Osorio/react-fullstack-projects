import { Menu } from "./components/Menu"
import Order from "./components/Order"
import OrderTotal from "./components/OrderTotal"
import OrderTips from "./components/OrderTips"
import { useMemo, useReducer } from "react"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  
  const [state, dispatch] = useReducer(orderReducer, initialState)
  const isEmpty = useMemo(()=> state.order.length > 0, [state.order])

  return (
    <>
      <header className="ring-1 p-2 text-center bg-blue-200">
        <p className="capitalize text-xl font-bold">calculadora de propinas + <span className="text-blue-600">typesScript</span></p>
      </header>

      <section className="md:grid grid-cols-2 m-2  p-2">
        <div className="space-y-2 m-2">
          <h2 className="text-center text-2xl capitalize font-extrabold">menu</h2>
          {state.menuData.map(item => (
            <Menu
              key={item.id}
              item={item}
              dispatch= {dispatch}
            />
          ))}
        </div>


        <div className="space-y-2">
          <h2 className="text-center text-2xl capitalize font-extrabold m-4">orden</h2>

          {!isEmpty ? <p className="bg-blue-300 text-center p-2 block m-3 capitalize font-bold shadow-lg rounded-md">sin orden </p> : state.order.map(item => (
            <Order
              key={item.id}
              item={item}
              dispatch={dispatch}
            />
          ))}

          {isEmpty ?
            <>
              <OrderTips
                dispatch={dispatch}
              />

              <OrderTotal
                order={state.order}
                tip={state.tip}
              />
              <button className="ring-1 w-full text-center capitalize p-2 rounded-md m-2 font-extrabold bg-blue-300 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-black duration-200" onClick={() => dispatch({type: "clear-items"})}>realizar pedido</button>
            </> : ""}
        </div>

      </section>
    </>
  )
}

export default App
