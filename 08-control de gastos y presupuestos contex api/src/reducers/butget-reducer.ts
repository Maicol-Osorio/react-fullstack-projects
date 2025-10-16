

export type butgetActions =
    { type: "add-butgetInitial", payload: { butget: number } }

export type butgetState = {
    butgetInitial: number
}
export const initialState: butgetState = {
    butgetInitial: 0
}

export const butgetReducer = (
    state = initialState,
    actions: butgetActions
) => {

    if(actions.type == "add-butgetInitial"){

        return{
            ...state,
            butgetInitial: actions.payload.butget
        }
    }
    return {
        ...state
    }
}