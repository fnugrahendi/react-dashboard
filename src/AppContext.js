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
    const [viewMode, setViewMode] = useState(ViewModeEnum.MAIN)
    const [resources, setResources] = useState([])

    const changeViewMode = (viewMode) => {
        if (Object.values(ViewModeEnum).indexOf(viewMode) > -1) {
            setViewMode(viewMode)
        } else {
            console.log("incorrect view mode")
        }
    }

    const getResources = () => {
        axios.get(`${baseUrl}/resources`)
            .then(resp => {
                const data = resp.data.data ? resp.data.data : []
                setResources(data)
            })
    }

    const login = () => {
        setLogin(true)
    }

    const logout = () => {
        setLogin(false)
    }

    return (
        <AppContext.Provider
            value={{
                isLoggedIn,
                viewMode,
                resources,
                getResources,
                changeViewMode: changeViewMode,
                login: login,
                logout: logout,
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, Consumer, AppContext }
