
type CaloriesProps = {
    calories: number
    name: string
}
const Calories = ({calories, name}: CaloriesProps) => {
    return (
        <div className="bg-white/50 md:p-2 p-1 rounded-md flex flex-col justify-center items-center">
            <span className="md:text-3xl font-black">{calories}</span>
            <p className="capitalize md:text-lg">{name}</p>
        </div>
    )
}

export default Calories
