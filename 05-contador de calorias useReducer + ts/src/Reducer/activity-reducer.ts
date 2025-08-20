import type { ActivityT } from "../types"

export type activityActions =
    { type: "saveActivity", payload: { newActivity: ActivityT } }


export type activityState = {
    activities: ActivityT[]
}

export const initialState: activityState = {
    activities: []
}


export const activityReducer = (
    state: activityState = initialState,
    action: activityActions
) => {
    if (action.type == "saveActivity") {
        
        return{
            ...state,
            activities : [...state.activities, action.payload.newActivity]
        }
    }

    return state
}