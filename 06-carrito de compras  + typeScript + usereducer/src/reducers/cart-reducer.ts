import { db } from "../data/db"
import type { TCart, TData } from "../types"

export type cartActions =
    { type: "add-Cart", payload: { guitar: TData } } |
    { type: "remove-cart", payload: { id: TData["id"] } } |
    { type: "increment-cart", payload: { id: TData["id"] } } |
    { type: "decrement-cart", payload: {id: TData["id"]}} |
    { type: "clear-cart"}


export type cartT = {
    data: TData[]
    cart: TCart[]
}

const getLocal = (): TCart[]=>{
    const localExist = localStorage.getItem("cart")
    return localExist? JSON.parse(localExist) : []
}

export const cartInitial: cartT = {
    data: db,
    cart: getLocal()
}

export const cartReducer = (
    state = cartInitial,
    action: cartActions
) => {

    const maxItem = 10
    const minItem = 1


    if (action.type == "add-Cart") {

        let updateCart: TCart[] = []
        const guitarExist = state.cart.find(item => item.id == action.payload.guitar.id)

        if (guitarExist) {
            updateCart = state.cart.map(item => {

                if (item.id == action.payload.guitar.id) {
                    if (item.quantity < maxItem) {
                        return {
                            ...item, quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })
        } else {
            const newItem: TCart = { ...action.payload.guitar, quantity: 1 }
            updateCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updateCart
        }
    }

    if (action.type == "remove-cart") {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id)
        }
    }

    if (action.type == "increment-cart") {

        const incrementCart = state.cart.map(item => {
            if (item.id == action.payload.id && item.quantity < maxItem) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item
            }
        })

        return{
            ...state,
            cart: incrementCart
        }
    }

    if(action.type == "decrement-cart"){
        const decrementCart = state.cart.map(item=>{
            if(item.id == action.payload.id && item.quantity > minItem){   
                return{
                    ...item,
                    quantity: item.quantity -1
                }
            }else{
                return item
            }
        })

        return{
            ...state,
            cart: decrementCart
        }
    }

    if(action.type == "clear-cart"){
        return{
            ...state,
            cart: []
        }
    }



    return {
        ...state
    }
}