import React from 'react';
import { Consumer } from '../AppContext'
import { Login } from '../pages'
import Dashboard from '../pages/Dashboard'

export default function Layout() {
    return (
        <Consumer>
            {({ isLoggedIn, login, logout, viewMode, changeViewMode }) => {
                return isLoggedIn ?
                    <Dashboard logout={logout} viewMode={viewMode} changeViewMode={changeViewMode} /> : 
                    <Login login={login}/>
            }}
        </Consumer>
    );
}