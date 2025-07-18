import { useEffect, useState } from "react"
import { db } from "../data/db"

export const useCart = () => {


    const getLocal = () => {
        const cartLocal = localStorage.getItem("cart")
        return cartLocal ? JSON.parse(cartLocal) : []
    }

    const maxItem = 10
    const minItem = 1

    const [cart, setCart] = useState(getLocal)
    const [data] = useState(db)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    const increaceQuantity = (id) => {
        const updateCart = cart.map(item => {
            if (item.id == id && item.quantity < maxItem) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        setCart(updateCart)
    }

    const decrementQuantity = (id) => {
        const updateCart = cart.map(item => {
            if (item.id == id && item.quantity > minItem) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }

            return item
        })

        setCart(updateCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const addCart = (guitar) => {
        const guitarExist = cart.findIndex(item => item.id == guitar.id)
        if (guitarExist < 0) {
            guitar.quantity = 1
            setCart([...cart, guitar])
        } else {
            if (cart[guitarExist].quantity < maxItem) {
                const updateCart = [...cart]
                updateCart[guitarExist].quantity++
                setCart(updateCart)
            }
        }
    }

    return {
        cart,
        data,
        removeItem,
        increaceQuantity,
        decrementQuantity,
        clearCart,
        addCart
    }
}