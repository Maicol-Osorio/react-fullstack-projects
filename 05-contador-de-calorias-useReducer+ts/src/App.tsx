import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"

function App() {

const [state, dispatch] = useReducer(activityReducer, initialState)
  return (
    <>
      <header className="bg-blue-400 flex justify-center justify-around p-3 shadow-md shadow-black/50">
        <h1 className="capitalize font-semibold text-white text-2xl">contador de calorias</h1>
        <button className="ring-1 py-1 px-2 rounded-md capitalize hover:bg-blue-500 hover:text-white duration-300 hover:shadow-md hover:shadow-black/50 font-semibold">reiniciar</button>
      </header>

      <section className="flex justify-center items-center w-full m-5">
          <Form
            dispatch={dispatch}
          />
      </section>
    </>
  )
}

export default App
