import React, { useReducer } from 'react';
import axios from 'axios'
import { ViewModeEnum } from '../AppContext'
import appReducer from '../reducers/appReducer'
import { Login, Registration } from '../pages'
import Dashboard from '../pages/Dashboard'
import { reqresAPI } from '../api/reqresAPI'


const initialAppReducer = {
    isLoggedIn: false,
    isLoginRequest: false,
    isLogoutRequest: false,
    isRegisterRequest: false,
    errorMessage: "",
    viewMode: ViewModeEnum.MAIN,
}

export default function Layout() {
    const [appState, dispatchApp] = useReducer(appReducer, initialAppReducer)

    const setViewMode = (viewMode) => {
        dispatchApp({ type: 'SET_VIEW_MODE', viewMode })
    }

    const setLoginRequest = () => {
        dispatchApp({ type: 'LOGIN_REQUEST' })
    }

    const setLogoutRequest = () => {
        dispatchApp({ type: 'LOGOUT_REQUEST' })
    }

    const setLoginSuccess = () => {
        dispatchApp({ type: 'LOGIN_SUCCESS' })
    }

    const setLogoutSuccess = () => {
        dispatchApp({ type: 'LOGOUT_SUCCESS' })
    }

    const setLoginFailed = (message) => {
        dispatchApp({ type: 'LOGIN_FAILED', message })
    }

    const setRegisterRequest = () => {
        dispatchApp({ type: 'REGISTER_REQUEST' })
    }

    const setRegisterSuccess = () => {
        dispatchApp({ type: 'REGISTER_SUCCESS' })
    }

    const setRegisterFailed = (message) => {
        dispatchApp({ type: 'REGISTER_FAILED', message })
    }

    const changeViewMode = (viewMode) => {
        if (Object.values(ViewModeEnum).indexOf(viewMode) > -1) {
            setViewMode(viewMode)
        } else {
            console.log("incorrect view mode")
        }
    }

    const login = async (email, password) => {
        setLoginRequest()
        try {
            const loginResp = await reqresAPI({
                path: 'login',
                method: 'post',
                data: {
                    email,
                    password
                },
            })
            
            console.log(loginResp)
            setLoginSuccess()
        } catch {
            setLoginFailed("Login failed. Invalid username or password.")
        }
    }

    const logout = async () => {
        setLogoutRequest()
        setTimeout(setLogoutSuccess, 1000)
    }

    const register = async (email, password) => {
        setRegisterRequest()
        try {
            const registerResp = await reqresAPI({
                method: 'post',
                path: 'register',
                data: {
                    email,
                    password
                },
            })
            console.log(registerResp)
            setRegisterSuccess()
        } catch {
            setRegisterFailed("Register failed. Missing field")
        }
    }
    return (
        appState.isLoggedIn ?
            <Dashboard
                logout={logout}
                viewMode={appState.viewMode}
                changeViewMode={changeViewMode} /> :
            appState.viewMode == ViewModeEnum.REGISTER ?
                <Registration
                    register={register}
                    isRegistering={appState.isRegisterRequest}
                    registerMessage={appState.errorMessage}
                    changeViewMode={changeViewMode} /> :
                <Login
                    login={login}
                    isLoggingIn={appState.isLoginRequest}
                    loginErrorMessage={appState.errorMessage}
                    changeViewMode={changeViewMode} />
    );
}