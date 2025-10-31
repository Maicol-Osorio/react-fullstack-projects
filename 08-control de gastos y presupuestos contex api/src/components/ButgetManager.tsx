import AmountDisplay from "./AmountDisplay"
import ExpeseList from "./ExpeseList"
import ExpeseDetails from "./ExpeseList"

const ButgetManager = () => {
    return (
        <div className="p-2 justify-between flex flex-col">

            <div className="flex flex-row ring-1 ring-black/30 rounded-md shadow-lg shadow-black/60 p-5">
                <div className="w-1/2">
                    <img src="./grafico.jpg" alt="grafica" />
                </div>

                <div className="w-1/2  justify-center items-center flex flex-col space-y-4">
                    <button className="p-2 bg-pink-500 w-full rounded-md font-semibold capitalize text-white">resetear</button>

                    <AmountDisplay
                        nombre="presupuesto"
                        cantidad={200}
                    />

                    <AmountDisplay
                        nombre="disponible"
                        cantidad={500}
                    />

                    <AmountDisplay
                        nombre="gastado"
                        cantidad={100}
                    />

                </div>
            </div>

            <ExpeseList />


        </div>
    )
}

export default ButgetManager
