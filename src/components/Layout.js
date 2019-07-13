import React from 'react';
import { Consumer, ViewModeEnum } from '../AppContext'
import { Login, Registration } from '../pages'
import Dashboard from '../pages/Dashboard'

export default function Layout() {
    return (
        <Consumer>
            {({ isLoggedIn, 
                loginErrorMessage, 
                isLoggingIn, 
                login, logout, 
                viewMode, 
                changeViewMode, 
                register,
                isRegistering,
                registerMessage, }) => {
                return isLoggedIn ?
                    <Dashboard
                        logout={logout}
                        viewMode={viewMode}
                        changeViewMode={changeViewMode} /> : 
                    viewMode == ViewModeEnum.REGISTER ?
                        <Registration
                            register={register}
                            isRegistering={isRegistering}
                            registerMessage={registerMessage}
                            changeViewMode={changeViewMode}/> :
                        <Login
                            login={login}
                            isLoggingIn={isLoggingIn}
                            loginErrorMessage={loginErrorMessage}
                            changeViewMode={changeViewMode}/>
            }}
        </Consumer>
    );
}