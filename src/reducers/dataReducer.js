const initialState = {
    resources: [],
    users: [],
    isFetchingData: false,
    errorMessage: ""
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_REQUEST':
        case 'FETCH_RESOURCES_REQUEST':
            return { ...state, isFetchingData: true, errorMessage: "" }
        case 'FETCH_USERS_SUCCESS':
            return { ...state, isFetchingData: false, users: action.users, errorMessage: "" }
        case 'FETCH_RESOURCES_SUCCESS':
            return { ...state, isFetchingData: false, resources: action.resources, errorMessage: "" }
        case 'FETCH_USERS_FAILED':
            return { ...state, isFetchingData: false, errorMessage: action.message  }
        case 'FETCH_RESOURCES_FAILED':
            return { ...state, isFetchingData: false, errorMessage: action.message }
        default:
            break
    }
}