export const ViewModeEnum = {
    MAIN : "MAIN",
    LIST: "LIST",
    REGISTER: "REGISTER",
}

const initialState = {
    isLoggedIn: false,
    isLoginRequest: false,
    isLogoutRequest: false,
    errorMessage: "",
    viewMode: ViewModeEnum.MAIN,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isLoggedIn: true, errorMessage: "", isLoginRequest: false }
        case 'LOGOUT_SUCCESS':
            return { ...state, isLoggedIn: false, errorMessage: "", isLogoutRequest: false }
        case 'LOGOUT_REQUEST':
            return { ...state, isLogoutRequest: true, errorMessage: "" }
        case 'LOGIN_REQUEST':
            return { ...state, isRequesting: true, errorMessage: "" }
        case 'LOGIN_FAILED':
            return { ...state, isLoginRequest: false, errorMessage: action.message }
        case 'LOGOUT_FAILED':
            return { ...state, isLogoutRequest: false, errorMessage: action.message }
        case 'SET_VIEW_MODE':
            return { ...state, viewMode: action.viewMode }
        default:
            break
    }
}