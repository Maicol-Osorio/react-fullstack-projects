import { categories } from "../data/data"
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import { useState } from "react";
import type { TDraftExpense, Value } from "../types";
import Message from "./Message";
import { useButget } from "../hooks/useButget";



const ExpenseForm = () => {

    const draftInitial = {
        expense: "",
        amount: 0,
        category: "",
        expenseDate: new Date
    }

    const [draftExpense, setDraftExpense] = useState<TDraftExpense>(draftInitial)

    const [message, setMessage] = useState("")

    const { state, dispatch } = useButget()

    const handleChangeDate = (value: Value) => {
        setDraftExpense({
            ...draftExpense,
            expenseDate: value
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isNumeric = ["amount"].includes(name)
        setDraftExpense({
            ...draftExpense,
            [name]: isNumeric ? +value : value

        })

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(draftExpense).includes("")) {
            setMessage("todos los campos son requeridos")
            return
        }

        setMessage("")
        dispatch({ type: "add-expense", payload: { expense: draftExpense } })
        setDraftExpense(draftInitial)



    }
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <legend className="text-center capitalize font-extrabold text-xl border-b-2 border-blue-600 ">agregar gasto</legend>

            {message && <Message>{message}</Message>}
            <div className="flex flex-col p-2">
                <label htmlFor="expense" className="capitalize cursor-pointer pb-2 font-semibold">nombre</label>
                <input type="text" name="expense" id="expense" className="ring-1 rounded-md p-2" value={draftExpense.expense} onChange={handleChange} />
            </div>

            <div className="flex flex-col p-2">
                <label htmlFor="amount" className="capitalize cursor-pointer pb-2 font-semibold">cantidad</label>
                <input type="number" name="amount" id="amount" className="ring-1 rounded-md p-2" value={draftExpense.amount} onChange={handleChange} />
            </div>

            <div className=" flex flex-col p-2">
                <label htmlFor="category" className="capitalize cursor-pointer pb-2 font-semibold">categoria</label>
                <select name="category" id="category" className="ring-1 p-2 cursor-pointer" value={draftExpense.category} onChange={handleChange}>
                    {categories.map(item => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col p-2">
                <label htmlFor="amount" className="capitalize cursor-pointer pb-2 font-semibold">fecha gasto</label>
                <DatePicker
                    value={draftExpense.expenseDate}
                    onChange={handleChangeDate}
                />
            </div>

            <button className="bg-pink-500 w-full rounded-md p-2 text-white font-semibold hover:shadow-md hover:shadow-black/50 duration-200">agregar gasto</button>


        </form>
    )
}

export default ExpenseForm
