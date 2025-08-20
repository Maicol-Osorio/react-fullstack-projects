import Form from "./components/Form"
import { useReducer } from "react"
import { activityReducer, initialState } from "./Reducer/activity-reducer"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="bg-blue-300 flex p-3 justify-center items-center space-x-5">
        <h1 className="text-xl capitalize font-semibold">contador de calorias</h1>
        <button className="ring-1 px-3 py-1 capitalize rounded-md hover:shadow-md hover:shadow-black hover:bg-blue-400 hover:text-white duration-300">reiniciar</button>
      </header>

      <section className="bg-blue-400/25 p-3 flex justify-center flex-col justify-center items-center">
        <Form
          dispatch={dispatch}
        />

        <div>hol</div>
      </section>
    </>
  )
}

export default App
