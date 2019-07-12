import React, { useState } from "react"
import axios from 'axios'

let AppContext = React.createContext()
const Consumer = AppContext.Consumer

const baseUrl = "https://reqres.in/api"

export const ViewModeEnum = {
    MAIN : "MAIN",
    LIST: "LIST"
}

const AppContextProvider = (props) => {
    const [isLoggedIn, setLogin] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [viewMode, setViewMode] = useState(ViewModeEnum.MAIN)
    const [loginErrorMessage, setLoginErrorMessage] = useState("")
    const [resources, setResources] = useState([])

    const changeViewMode = (viewMode) => {
        if (Object.values(ViewModeEnum).indexOf(viewMode) > -1) {
            setViewMode(viewMode)
        } else {
            console.log("incorrect view mode")
        }
    }

    const getResources = async () => {
        const resp = await axios.get(`${baseUrl}/resources`)
        const data = resp.data.data ? resp.data.data : []
        setResources(data)
    }

    const login = async (email, password) => {
        setIsLoggingIn(true)
        setLoginErrorMessage("")
        try {
            const loginResp = await axios.post(`${baseUrl}/login`, { 
                email: email,
                password: password
            })
            setLogin(true)
        } catch {
            setLoginErrorMessage("Login failed. Invalid username or password.")
        }
        setIsLoggingIn(false)
    }

    const logout = () => {
        setLogin(false)
    }

    return (
        <AppContext.Provider
            value={{
                isLoggedIn,
                isLoggingIn,
                loginErrorMessage,
                viewMode,
                resources,
                getResources,
                changeViewMode,
                login,
                logout,
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, Consumer, AppContext }
