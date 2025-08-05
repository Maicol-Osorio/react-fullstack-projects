import { tipOptions } from "../helpers/tips"


type OrderTipsProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}
const OrderTips = ({setTip}: OrderTipsProps) => {
  return (
    <div className="p-2">
        <h2 className="capitalize font-bold text-xl">propina</h2>
        <form action="">
            <div>
                {tipOptions.map(item=>(
                    <div key={item.id}>
                        <input type="radio" name="tip" id={item.id} value={item.value} onChange={e=>setTip(+e.target.value)}/>
                        <label htmlFor="tip">{item.label}</label>

                    </div>
                ))}
            </div>
        </form>
    </div>
  )
}

export default OrderTips

