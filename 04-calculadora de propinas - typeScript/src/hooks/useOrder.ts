import { useMemo, useState } from "react"
import type { TMenu, TMenuData } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<TMenu[]>([])
    const isEmpty = useMemo(()=> order.length, [order])


    const addItem = (item: TMenuData) => {

        const itemExist = order.findIndex(menuItem => menuItem.id == item.id)

        if (itemExist == -1) {
            const nweItem: TMenu = { ...item, quantity: 1 }
            setOrder([...order, nweItem])
        } else {
            const nweOrder = order.map(menuItem => {
                if (menuItem.id == item.id) {
                    return { ...menuItem, quantity: menuItem.quantity + 1 }
                } else {
                    return menuItem
                }
            })
            setOrder(nweOrder)
        }

        console.log(order)

    }

    const removeItem = (id: TMenu["id"])=>{
        setOrder(order.filter(orden=> orden.id !== id))
    }

    return {
        order,
        isEmpty,
        addItem,
        removeItem
    }
}