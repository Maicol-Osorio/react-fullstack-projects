import { useMemo } from "react"
import ButgetManager from "./components/ButgetManager"
import InitialBudgetForm from "./components/InitialBudgetForm"
import { useButget } from "./hooks/useButget"

function App() {

  const { state } = useButget()
  const isValid = useMemo(()=>state.butgetInitial<=0,[state.butgetInitial])
  console.log(isValid)

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="bg-blue-500 text-white text-center text-2xl font-semibold p-2 w-full">
        calculadora de presupuesto
      </header>


      <div className="w-2/4 p-2 my-4 " >
        {isValid? <InitialBudgetForm /> : <ButgetManager/>}
      </div>
    </div>
  )
}

export default App
