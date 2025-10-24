import type { TDraftExpense, TExpense } from "../types"
import { v4 as uuidv4 } from 'uuid';


export type butgetActions =
    { type: "add-butgetInitial", payload: { butget: number } } | 
    { type: "show-modal"} | 
    { type : "close-modal"} | 
    { type: "add-expense", payload: {expense: TDraftExpense}}

export type butgetState = {
    butgetInitial: number,
    modal: boolean,
    expenses: TExpense[]
}
export const initialState: butgetState = {
    butgetInitial: 0,
    modal: false,
    expenses: []
}

export const butgetReducer = (
    state = initialState,
    actions: butgetActions
) => {

    const newExpense = (expense: TDraftExpense): TExpense=>{
        return{
            ...expense,
            id: uuidv4()
        }
    }

    if(actions.type == "add-butgetInitial"){

        return{
            ...state,
            butgetInitial: actions.payload.butget
        }
    }

    if(actions.type == "show-modal"){
        return{
            ...state,
            modal: true
        }
    }

    if(actions.type == "close-modal"){
        return{
            ...state,
            modal: false
        }
    }

    if(actions.type == "add-expense"){
        const expense = newExpense(actions.payload.expense)
        return{
            ...state,
            expenses: {...state.expenses, expense},
            modal: false
        }
    }
    return {
        ...state
    }
}