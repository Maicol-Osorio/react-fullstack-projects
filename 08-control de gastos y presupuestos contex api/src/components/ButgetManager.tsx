import AmountDisplay from "./AmountDisplay"

const ButgetManager = () => {
  return (
    <div className="shadow-lg shadow-black/50 p-2 ring-1 flex justify-between">
        <div className="w-1/2">
            <p>imagen</p>
        </div>

        <div className="w-1/2 ring-1 justify-center items-center flex flex-col space-y-4">
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
  )
}

export default ButgetManager
