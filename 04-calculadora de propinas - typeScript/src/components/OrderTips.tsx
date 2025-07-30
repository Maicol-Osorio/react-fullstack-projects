import { tipOptions } from "../helpers/tips"

const OrderTips = () => {
  return (
    <div className="p-2">
        <h2 className="capitalize font-bold text-xl">propina</h2>
        <form action="">
            <div>
                {tipOptions.map(item=>(
                    <div key={item.id}>
                        <input type="radio" name="tip" id={item.id} value={item.value} />
                        <label htmlFor="tip">{item.label}</label>
                    </div>
                ))}
            </div>
        </form>
    </div>
  )
}

export default OrderTips

