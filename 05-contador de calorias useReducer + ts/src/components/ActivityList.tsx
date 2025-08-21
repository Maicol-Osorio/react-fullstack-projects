import type { ActivityT } from "../types"

type ActivityListProps = {
    state: ActivityT[]
}

const ActivityList = ({ state }: ActivityListProps) => {


    return (
        <>
            {state.map(item => (
                <div className="ring-1 w-3/4 h-20 p-3 rounded-md shadow-md ring-gray-400 shadow-black flex items-center mt-2">
                    <div className="w-2/4 flex">
                        <div className={`w-3 flex ${item.categories == 1 ? "bg-green-500" : "bg-orange-500"}`}>

                        </div>
                        <h2 className="capitalize font-bold text-3xl">{item.name}</h2>

                    </div>

                    <div className="w-2/4 flex justify-between">
                        <div className="flex justify-center items-center">
                            <h2 className="capitalize font-bold text-3xl">{item.categories == 1 ? `+${item.calories} calorias` : `-${item.calories} calorias`}</h2>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default ActivityList
