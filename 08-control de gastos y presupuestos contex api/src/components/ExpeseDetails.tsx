import { useMemo } from "react"
import { useButget } from "../hooks/useButget"

const ExpeseDetails = () => {
    const { state } = useButget()
    const isEmpty = useMemo(() => state.expenses.length == 0, [state.expenses])
    console.log(state.expenses.map(item=>{
        return item.expense
    }))

    return (
        <div className="right-1 w-full p-2 ring-black border border-2 border-red-50 " >
            {isEmpty ? <p className="ring-1 ring-black/50 text-center bg-gray-400/60 capitalize  p-2 font-semibold rounded-md mt-5">no hay gastos aún</p> : <p>hola</p> }
        </div>
    )
}

export default ExpeseDetails
