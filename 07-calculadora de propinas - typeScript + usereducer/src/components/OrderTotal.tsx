import { useMemo } from "react"
import type { TMenu } from "../types"
import { formatCurrency } from "../helpers/copCurrency"


type OrderTotalProps = {
    order: TMenu[],
    tip: number
}

const OrderTotal = ({order, tip}: OrderTotalProps) => {
    const subtotal = useMemo(()=> order.reduce((total, item)=> total + (item.price * item.quantity), 0), [order])

    const tipOrder = useMemo(()=>subtotal * tip, [order, tip])
    
    const total = useMemo(()=>subtotal + tipOrder, [order, tip])
  return (
    <div className="p-2 capitalize">
        <h2 className="capitalize font-bold text-xl">resumen de pago</h2>    
        <p>subTotal: <span className="underline">{formatCurrency(subtotal)}</span></p>
        <p>propina: <span>{formatCurrency(tipOrder)}</span></p>
        <p>total: <span>{formatCurrency(total)}</span></p>
    </div>
  )
}

export default OrderTotal
