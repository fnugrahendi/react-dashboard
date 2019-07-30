import React, { useState } from "react"
import axios from 'axios'

let AppContext = React.createContext()
const Consumer = AppContext.Consumer

const baseUrl = "https://reqres.in/api"

export const ViewModeEnum = {
    MAIN : "MAIN",
    LIST: "LIST",
    REGISTER: "REGISTER",
}

const AppContextProvider = (props) => {
    const [isLoggedIn, setLogin] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [loginErrorMessage, setLoginErrorMessage] = useState("")

    const [isRegistering, setIsRegistering] = useState(false)
    const [registerMessage, setRegisterMessage] = useState("")

    const [viewMode, setViewMode] = useState(ViewModeEnum.MAIN)
    
    const [resources, setResources] = useState([])
    const [users, setUsers] = useState([])

    const [isFetchingData, setIsFetchingData] = useState(false)
    const [fetchingDataResult, setfetchingDataResult] = useState({})

    const changeViewMode = (viewMode) => {
        if (Object.values(ViewModeEnum).indexOf(viewMode) > -1) {
            setViewMode(viewMode)
        } else {
            console.log("incorrect view mode")
        }
    }

    const addResource = async (inputData) => {
        setIsFetchingData(true)
        setfetchingDataResult({})
        try {
            const resp = await axios.post(`${baseUrl}/users`, inputData)
            const data = resp.data.data ? resp.data.data : []
            console.log(data)
            setfetchingDataResult({success: true, message: "Successfully create new resource"})
        } catch {
            setfetchingDataResult({success: false, message: "Failed to create new resource"})
        }
        setIsFetchingData(false)
    }

    const editResource = async (inputData) => {
        setIsFetchingData(true)
        setfetchingDataResult({})
        try {
            const resp = await axios.put(`${baseUrl}/users`, inputData)
            const data = resp.data.data ? resp.data.data : []
            console.log(data)
            setfetchingDataResult({success: true, message: "Successfully edit resource"})
        } catch {
            setfetchingDataResult({success: false, message: "Failed to edit resource"})
        }
        setIsFetchingData(false)
    }

    const deleteResource = async (id) => {
        setIsFetchingData(true)
        setfetchingDataResult({})
        try {
            const resp = await axios.delete(`${baseUrl}/users/${id}`)
            const data = resp.data.data ? resp.data.data : []
            console.log(data)

            let resourceArr = resources
            if (id > -1) {
                resourceArr.splice(id, 1);
            }
            setResources(resourceArr)

            setfetchingDataResult({success: true, message: "Successfully delete resource"})
        } catch {
            setfetchingDataResult({success: false, message: "Failed to delete resource"})
        }
        setIsFetchingData(false)
    }

    const getResources = async () => {
        try {
            const resp = await axios.get(`${baseUrl}/resources`)
            const data = resp.data.data ? resp.data.data : []
            setResources(data)
        } catch {
            console.log("error fetching resources")
        }
    }

    const getUsers = async () => {
        try {
            var userData = []
            const resp = await axios.get(`${baseUrl}/users`)
            const data = resp.data.data ? resp.data.data : []
            if (data.length > 0)
                userData = [...data]
            console.log(data)
            const resp_next = await axios.get(`${baseUrl}/users?page=2`)
            const data_next = resp_next.data.data ? resp_next.data.data : []
            console.log(data_next)
            if (data_next.length > 0)
                userData = [...userData, ...data_next]
            setUsers(userData)
        } catch {
            console.log("error fetching resources")
        }
    }

    const login = async (email, password) => {
        setIsLoggingIn(true)
        setLoginErrorMessage("")
        try {
            const loginResp = await axios.post(`${baseUrl}/login`, { 
                email: email,
                password: password
            })
            console.log(loginResp)
            setLogin(true)
        } catch {
            setLoginErrorMessage("Login failed. Invalid username or password.")
        }
        setIsLoggingIn(false)
    }

    const logout = () => {
        setLogin(false)
    }

    const register = async (email, password) => {
        setIsRegistering(true)
        setRegisterMessage({})
        try {
            const registerResp = await axios.post(`${baseUrl}/register`, { 
                email: email,
                password: password
            })
            console.log(registerResp)
            setRegisterMessage({message: "Register success", success: true})
        } catch {
            setRegisterMessage({message: "Register failed. Missing field", success: false})
        }
        setIsRegistering(false)
    }

    return (
        <AppContext.Provider
            value={{
                isLoggedIn,
                isLoggingIn,
                loginErrorMessage,
                isRegistering,
                isFetchingData,
                fetchingDataResult,
                registerMessage,
                viewMode,
                resources,
                users,
                getUsers,
                getResources,
                changeViewMode,
                login,
                logout,
                register,
                addResource,
                editResource,
                deleteResource,
                setfetchingDataResult
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, Consumer, AppContext }
