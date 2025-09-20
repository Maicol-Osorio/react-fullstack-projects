import type { ActivityT } from "../types"

export type activityActions = 
    {type: "save-activity", payload: {newActivity : ActivityT }}


type ActivitiState = {
    activities: ActivityT[]
}


export const initialState: ActivitiState = {
    activities: []
}

export const activityReducer = (
    state: ActivitiState = initialState,
    action: activityActions
) => {

    if(action.type == "save-activity"){


        return{
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state
}