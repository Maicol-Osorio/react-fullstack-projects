import { useEffect, useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import Item from "./components/Item"
import BoxContent from "./components/BoxContent"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  const isEmpty = useMemo(() => state.activities.length == 0, [state.activities])
  console.log(isEmpty)

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <header className="bg-blue-400 flex justify-center space-x-5 p-3 shadow-md shadow-black/50">
        <h1 className="capitalize font-semibold text-white md:text-2xl md:mx-96">contador de calorias</h1>
        <button className="ring-1 py-1 px-2 text-sm md:text-base rounded-md capitalize hover:bg-blue-500 hover:text-white duration-300 hover:shadow-md hover:shadow-black/50 font-semibold" onClick={() => dispatch({ type: "clearActivity" })}>reiniciar</button>
      </header>

      <section className="flex justify-center items-center w-full mt-5">
        <Form
          dispatch={dispatch}
          state={state}
        />
      </section>

      <section className="flex justify-center items-center m-5 ">
         <BoxContent
          activities={state.activities}
         />
      </section>

      <section className=" flex flex-col justify-center items-center w-full m-5 space-y-3 py-5">
        {isEmpty ? <h2 className="capitalize font-black md:text-2xl text-xl mb-3">aún no has agregado nada</h2> : <h2 className="capitalize font-black md:text-2xl text-xl mb-3">comidas y ejercicios </h2>}

        <Item
          dispatch={dispatch}
          activities={state.activities}
        />


      </section>
    </>
  )
}

export default App
