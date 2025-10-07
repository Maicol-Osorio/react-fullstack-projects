import type { ActivityT } from "../types"

export type activityActions =
    { type: "save-activity", payload: { newActivity: ActivityT } } |
    { type: "edit-activity", payload: { idEdit: ActivityT["id"] } } |
    { type: "delete-activity", payload: {idDelete: ActivityT["id"]}} | 
    { type: "clearActivity"}


export type ActivitiState = {
    activities: ActivityT[]
    activitiEdit: ActivityT["id"]
}


const getLocalstorage = ()=>{
    const activities = localStorage.getItem("activities")
    return activities? JSON.parse(activities) : []
}

export const initialState: ActivitiState = {
    activities: getLocalstorage(),
    activitiEdit: ""
}

export const activityReducer = (
    state: ActivitiState = initialState,
    action: activityActions
) => {

    
    if (action.type == "save-activity") {

        let activiti: ActivityT[] = []

        if (state.activitiEdit) {
            //es para editar
            activiti = state.activities.map(item => {
                return item.id == state.activitiEdit ? action.payload.newActivity : item
            })
        } else {
            //es para agregar
            activiti = [...state.activities, action.payload.newActivity]

        }

        return {
            ...state,
            activities: activiti,
            activitiEdit: ""
        }
    }

    if (action.type == "edit-activity") {

        return {
            ...state,
            activitiEdit: action.payload.idEdit
        }
    }

    if(action.type === "delete-activity"){

        return{
            ...state,
            activities: state.activities.filter(item=>item.id !== action.payload.idDelete)

        }
    }

    if(action.type == "clearActivity"){
        return{
            activitiEdit: "",
            activities: []
        }
    }
    return state
}



