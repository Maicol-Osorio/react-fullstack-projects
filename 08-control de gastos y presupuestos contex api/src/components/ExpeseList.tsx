import { useMemo } from "react"
import { useButget } from "../hooks/useButget"
import ExpenseDetails from "./ExpenseDetails"

const ExpeseList = () => {
    const { state } = useButget()
    const isEmpty = useMemo(() => state.expenses.length == 0, [state.expenses])


    return (
        <div className="right-1 w-full p-2 ring-black border border-2 border-red-50 " >
            {isEmpty ? <p className="ring-1 ring-black/50 text-center bg-gray-400/60 capitalize  p-2 font-semibold rounded-md mt-5">no hay gastos aún</p> : (
                <>
                    <p className="ring-1 ring-black/50 text-center bg-gray-400/60 capitalize  p-2 font-semibold rounded-md my-5">listado de gastos</p>

                    {state.expenses.map(item => (
                        <div className="space-y-2 ">
                            <ExpenseDetails
                                expense={item}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default ExpeseList
