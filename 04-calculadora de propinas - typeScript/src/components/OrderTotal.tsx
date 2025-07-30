import { useMemo } from "react"
import type { TMenu } from "../types"
import { formatCurrency } from "../helpers/copCurrency"


type OrderTotalProps = {
    order: TMenu[]
}

const OrderTotal = ({order}: OrderTotalProps) => {
    const subtotal = useMemo(()=> order.reduce((total, item)=> total + (item.price * item.quantity), 0), [order])
  return (
    <div className="p-2 capitalize">
        <h2 className="capitalize font-bold text-xl">resumen de pago</h2>    
        <p>subTotal: <span className="underline">{formatCurrency(subtotal)}</span></p>
        <p>propina: <span>1541</span></p>
        <p>total: <span>1502</span></p>
    </div>
  )
}

export default OrderTotal
