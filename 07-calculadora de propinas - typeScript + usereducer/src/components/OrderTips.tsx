import type { Dispatch } from "react"
import { tipOptions } from "../helpers/tips"
import type { orderActions } from "../reducers/order-reducer"


type OrderTipsProps = {
    dispatch: Dispatch<orderActions>
}
const OrderTips = ( {dispatch}: OrderTipsProps) => {
  return (
    <div className="p-2">
        <h2 className="capitalize font-bold text-xl">propina</h2>
        <form action="">
            <div>
                {tipOptions.map(item=>(
                    <div key={item.id}>
                        <input type="radio" name="tip" id={item.id} value={item.value} onChange={e=>dispatch({type:"set-tip", payload: {tip: +e.target.value}})}/>
                        <label htmlFor="tip">{item.label}</label>

                    </div>
                ))}
            </div>
        </form>
    </div>
  )
}

export default OrderTips

