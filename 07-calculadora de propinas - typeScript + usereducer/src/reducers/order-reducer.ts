import { menuData } from "../data/db"
import type { TMenu, TMenuData } from "../types"

export type orderActions =
    { type: "add-item", payload: { item: TMenuData } } | 
    { type: "remove-order", payload: {id: TMenu["id"]}} |
    { type: "set-tip", payload:{tip: number}} |
    { type: "clear-items"}


type ordersT = {
    menuData: TMenuData[]
    order: TMenu[]
     tip: number
}
export const initialState: ordersT = {
    menuData: menuData,
    order: [],
    tip: 0
}


export const orderReducer = (
    state = initialState,
    action: orderActions
) => {

    if (action.type == "add-item") {

        const itemExist = state.order.findIndex(menuItem => menuItem.id == action.payload.item.id)
        let updateOrder = []
        if (itemExist == -1) {
            const nweItem: TMenu = { ...action.payload.item, quantity: 1 }
            updateOrder = [...state.order, nweItem]
        } else {
            updateOrder = state.order.map(menuItem => {
                if (menuItem.id == action.payload.item.id) {
                    return { ...menuItem, quantity: menuItem.quantity + 1 }
                } else {
                    return menuItem
                }
            })
        }

        return {
            ...state,
            order: updateOrder
        }
    }

    if(action.type == "remove-order"){
        const order = state.order.filter(item=>item.id !== action.payload.id)
        return{
            ...state,
            order
        }
    }

    if(action.type == "set-tip"){

        return{
            ...state,
            tip: action.payload.tip
        }
    }

    if(action.type == "clear-items"){
        return{
            ...state,
            order: [],
            tip: 0
        }
    }


    return {
        ...state
    }
}