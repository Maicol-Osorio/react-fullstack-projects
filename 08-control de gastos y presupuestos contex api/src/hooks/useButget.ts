import { useContext } from "react"
import { butgetContext } from "../context/ButgetContext"



export const useButget = ()=>{
    const context = useContext(butgetContext)
    return context
}