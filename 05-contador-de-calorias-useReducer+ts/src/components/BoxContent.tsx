import { useMemo } from "react"
import type { ActivityT } from "../types"
import Calories from "./Calories"

type BoxContentProps ={
    activities: ActivityT[]
}
const BoxContent = ({activities}: BoxContentProps) => {

    const caloriesConsumed = useMemo(()=>activities.reduce((total, item)=> item.categories == 1? total + item.calories :  total, 0), [activities])

    const caloriesBurned = useMemo(()=>activities.reduce((total, item)=> item.categories ==2 ? total + item.calories : total, 0),[activities]) 

    const caloriesDifference = useMemo(()=>caloriesConsumed - caloriesBurned, [activities])

    return (
        <div className="bg-blue-300 md:w-4/6 w-full shadow-md shadow-black/50 md:p-5 p-2 rounded-md flex md:justify-center justify-between md:space-x-32">
            <Calories
                calories={caloriesConsumed}
                name={"comida"}
            />

             <Calories
                calories={caloriesBurned}
                name={"ejercicio"}
            />

             <Calories
                calories={caloriesDifference}
                name={"diferencia"}
            />
        </div>
    )
}

export default BoxContent
