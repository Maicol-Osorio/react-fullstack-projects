import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react"
import { butgetReducer, initialState, type butgetActions, type butgetState } from "../reducers/butget-reducer"


type butgetContextProps = {
    state: butgetState,
    dispatch: Dispatch<butgetActions>
}

type butgetProviderProps = {
    children: ReactNode
}


export const butgetContext = createContext<butgetContextProps>(null!)

export const ButgetProvider = ({ children }: butgetProviderProps) => {

    const [state, dispatch] = useReducer(butgetReducer, initialState)
    return (
        <butgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </butgetContext.Provider>
    )
}