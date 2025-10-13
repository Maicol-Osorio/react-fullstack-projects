import type { TMenuData } from "../types"
import { formatCurrency } from "../helpers/copCurrency"
import type { Dispatch } from "react"
import type { orderActions } from "../reducers/order-reducer"

type MenuProps = {
    item: TMenuData
    dispatch: Dispatch<orderActions>
}

export const Menu = ({item, dispatch}: MenuProps) => {
  return (
    <button className="ring-1 flex justify-between p-2 hover:bg-blue-300 duration-200 cursor-pointer capitalize rounded-md hover:ring-2 w-full" onClick={()=> dispatch({type: "add-item", payload: {item}})}>
        <p>{item.name}</p>
        <span>{formatCurrency(item.price)}</span>
    </button>
  )
}


