import { useMemo } from "react"
import { Menu } from "./components/Menu"
import Order from "./components/Order"
import { menuData } from "./data/db"
import { useOrder } from "./hooks/useOrder"
import OrderTotal from "./components/OrderTotal"
import OrderTips from "./components/OrderTips"

function App() {
  const {order, isEmpty, addItem, removeItem} = useOrder()

  return (
    <>
      <header className="ring-1 p-2 text-center bg-blue-200">
        <p className="capitalize text-xl font-bold">calculadora de propinas + <span className="text-blue-600">typesScript</span></p>
      </header>

      <section className="grid grid-cols-2 m-2  p-2">
        <div className="space-y-2 m-2">
          <h2 className="text-center text-2xl capitalize font-extrabold">menu</h2>
          {menuData.map(item=>(
            <Menu
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>

        <div className="space-y-2">
            <h2 className="text-center text-2xl capitalize font-extrabold mb-4">orden</h2>
            {!isEmpty? <p className="bg-blue-300 text-center p-2 block m-3 capitalize font-bold shadow-lg rounded-md">sin orden</p> : order.map(item=>(
              <Order
                key={item.id}
                item={item}
                removeItem={removeItem}
              />
            )) }
            <OrderTips/>
            <OrderTotal
              order={order}
            />
        </div>
      </section>
    </>
  )
}

export default App
