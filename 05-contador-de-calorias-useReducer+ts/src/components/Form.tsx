import { useEffect, useState, type Dispatch } from "react"
import { v4 as uuidva } from "uuid"
import { categories } from "../data/data"
import type { ActivityT } from "../types"
import type { ActivitiState, activityActions } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<activityActions>
    state: ActivitiState
}

const Form = ({ dispatch, state }: FormProps) => {

    const initialActivity: ActivityT = {
        id: uuidva(),
        categories: 1,
        name: "",
        calories: 0
    }

    const [activity, setActivity] = useState<ActivityT>(initialActivity)



    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

        const isNumeric = ["categories", "calories"].includes(e.target.id)
        console.log(isNumeric)
        setActivity({
            ...activity,
            [e.target.id]: isNumeric ? +e.target.value : e.target.value
        })
    }

    useEffect(() => {
        if (state.activitiEdit) {
            const updateActiviti = state.activities.filter(item => item.id === state.activitiEdit)[0]
            setActivity(updateActiviti)

        }

    }, [state.activitiEdit])
    const isValid = () => {
        const { name, calories } = activity
        return calories > 0 && name.trim() !== ""
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch({ type: "save-activity", payload: { newActivity: activity } })
        setActivity({
            ...initialActivity,
            id: uuidva()
        })
    }


    return (
        <form className="md:w-4/6 w-5/6 ring-1 shadow-md shadow-black/50 p-5 rounded-md space-y-3">
            <div className="flex flex-col space-y-1">
                <label htmlFor="categories" className="capitalize font-medium cursor-pointer">categorias</label>
                <select name="categories" id="categories" className="ring-1 rounded-md p-2 outline-none hover:ring-2" value={activity.categories} onChange={handleChange}>
                    {categories.map(item => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="capitalize font-medium cursor-pointer">Nombre</label>
                <input type="text" name="name" id="name" className="ring-1 rounded-md p-2 outline-none hover:ring-2" placeholder="manzana, naranja, huevo, correr, nadar" value={activity.name} onChange={handleChange} />
            </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="calories" className="capitalize font-medium cursor-pointer">calorias</label>
                <input type="number" name="calories" id="calories" className="ring-1 rounded-md p-2 outline-none hover:ring-2" value={activity.calories} onChange={handleChange} />
            </div>

            <button type="submit" className="ring-1 py-3 px-2 rounded-md capitalize hover:bg-blue-500 hover:text-white duration-300 hover:shadow-md hover:shadow-black/50 font-semibold w-full disabled:bg-blue-950/30 disabled:ring-0 disabled:shadow-md disabled:text-black" disabled={!isValid()} onClick={handleSubmit}>{`guardar ${activity.categories == 1 ? "Comida" : "Ejercicio"}`}</button>
        </form>
    )
}

export default Form
