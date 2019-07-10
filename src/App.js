import React from 'react'
import Layout from './components/Layout'
import { AppContextProvider } from './AppContext'
import './App.css'

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Layout/>
      </div>
    </AppContextProvider>
  );
}

export default App;
