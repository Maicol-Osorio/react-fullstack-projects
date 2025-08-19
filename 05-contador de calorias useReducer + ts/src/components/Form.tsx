import { useState } from "react"
import { categories } from "../data/data"
import type { ActivityT } from "../types"
import type { ChangeEvent } from "react"

const Form = () => {

    const [activity, setActivity] = useState<ActivityT>({
        categories: 1,
        name: "",
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumeric = ["categories", "calories"].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: isNumeric ? +e.target.value : e.target.value
        })
    }

    const isValid = ()=>{
        const {name, calories} = activity
        return name.trim() !== "" && calories>0
    }

    const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
        e.preventDefault()
        console.log("hola desde submit")
    }



    return (
        <form className="bg-white w-2/4 p-3 rounded-md space-y-2">
            <div className="flex flex-col space-y-2">
                <label htmlFor="categories" className="capitalize font-semibold cursor-pointer">categorias</label>
                <select name="categories" id="categories" className="ring-1 p-2 rounded-md" value={activity.categories} onChange={handleChange}>
                    {categories.map(item => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="capitalize font-semibold cursor-pointer">nombre</label>
                <input type="text" name="name" id="name" className="ring-1 p-2 rounded-md" value={activity.name} onChange={handleChange} />
            </div>

            <div className="flex flex-col space-y-2">
                <label htmlFor="calories" className="capitalize font-semibold cursor-pointer">calorias</label>
                <input type="number" name="calories" id="calories" className="ring-1 p-2 rounded-md" value={activity.calories} onChange={handleChange} />
            </div>

            <input type="submit" className={`w-full ring-1 p-2 capitalize rounded-md bg-blue-400 ${isValid()? "hover:shadow-md hover:shadow-black hover:bg-blue-400 hover:text-white duration-300" : "disabled:bg-gray-300"}`} disabled={!isValid()} onClick={handleSubmit}/>
            
        </form>
    )
}

export default Form
