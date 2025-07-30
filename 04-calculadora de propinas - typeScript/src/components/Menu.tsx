import type { TMenuData } from "../types"
import { formatCurrency } from "../helpers/copCurrency"

type MenuProps = {
    item: TMenuData
    addItem: (item: TMenuData) => void
}

export const Menu = ({item, addItem}: MenuProps) => {
  return (
    <button className="ring-1 flex justify-between p-2 hover:bg-blue-300 duration-200 cursor-pointer capitalize rounded-md hover:ring-2 w-full" onClick={()=> addItem(item)}>
        <p>{item.name}</p>
        <span>{formatCurrency(item.price)}</span>
    </button>
  )
}


