

export type butgetActions =
    { type: "add-butgetInitial", payload: { butget: number } } | 
    { type: "show-modal"} | 
    { type : "close-modal"}

export type butgetState = {
    butgetInitial: number,
    modal: boolean
}
export const initialState: butgetState = {
    butgetInitial: 0,
    modal: false
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

    if(actions.type == "show-modal"){
        return{
            ...state,
            modal: true
        }
    }

    if(actions.type == "close-modal"){
        return{
            ...state,
            modal: false
        }
    }
    return {
        ...state
    }
}