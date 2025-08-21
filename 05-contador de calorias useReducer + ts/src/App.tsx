import Form from "./components/Form"
import { useReducer } from "react"
import { activityReducer, initialState } from "./Reducer/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="bg-blue-300 flex p-3 justify-center items-center space-x-5">
        <h1 className="text-xl capitalize font-semibold">contador de calorias</h1>
        <button className="ring-1 px-3 py-1 capitalize rounded-md hover:shadow-md hover:shadow-black hover:bg-blue-400 hover:text-white duration-300">reiniciar</button>
      </header>

      <section className="p-3 flex justify-center flex-col justify-center items-center">
        <Form
          dispatch={dispatch}
        />
      </section>

      <section className="flex justify-center mt-4 flex-col items-center">
        <ActivityList
          state={state.activities}
        />
      </section>
    </>
  )
}

export default App
