import type { TMenu, TMenuData } from "../types"
import { formatCurrency } from "../helpers/copCurrency"

type OrderProps = {
  item: TMenu
  removeItem: (id: TMenu["id"])=>void
}

const Order = ({item, removeItem}: OrderProps) => {
  return (
    <div className="flex w-full p-3 ring-1 shadow-lg rounded-lg">
      <div className="flex w-full justify-between px-4 items-center">
        <p className="capitalize text-lg w-2/3">{item.name}</p>
        <p className="w-1/3 ">{formatCurrency(item.price * item.quantity)}</p>
        <p>{item.quantity}</p>
      </div>

      <div className="flex items-center">
        <span className="bg-red-400 px-3 py-1 rounded-full font-bold hover:bg-red-600 hover:text-white duration-200 cursor-pointer" onClick={()=>removeItem(item.id)}>x</span>
      </div>
    </div>
  )
}

export default Order
