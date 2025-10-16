import { useMemo, useState } from "react"
import { useButget } from "../hooks/useButget"

const InitialBudgetForm = () => {

     const [butgetInitial, setButgetInitial] = useState(0)
     const {dispatch} = useButget()

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setButgetInitial(e.target.valueAsNumber)
        
     }

     const handleSubmit = ( e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch({type:"add-butgetInitial", payload: {butget: butgetInitial}})
     }

     const butgetIsValid = useMemo(()=>{
        return isNaN(butgetInitial) || butgetInitial <1
     },[butgetInitial])



    return (
        <div className="w-full flex justify-center items-center flex-col p-5 ring-1 shadow-lg shadow-black/50 rounded-md">
            <h1 className="font-black capitalize text-2xl text-blue-700 mb-5 ">presupuesto incial</h1>
            <form action="" className="w-full space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="butgetInitial" className="capitalize font-medium cursor-pointer">presupuesto</label>
                    <input type="number" name="butgetInitial" id="butgetInitial" value={butgetInitial} className="ring-1 p-2 rounded-lg" onChange={handleChange}/>
                </div>

                <input type="submit" value="agregar" className="bg-blue-500 w-full text-white p-2 rounded-md capitalize cursor-pointer hover:shadow-md hover:shadow-black/50 duration-200 hover:ring-1 hover:font-semibold disabled:bg-blue-500/50 disabled:shadow-white disabled:text-black/50 disabled:font-semibold disabled:ring-0" disabled={butgetIsValid} />
            </form>

        </div>
    )
}

export default InitialBudgetForm
