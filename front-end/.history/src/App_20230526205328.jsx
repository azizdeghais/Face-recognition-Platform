import './App.css'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Ajouter from './Ajouter/Ajouter';
import Navbar from './Navbar/Navbar';
import Liste from './Liste/Liste';
import Modifier from './Modifier/Modifier';
import RequireAuth from './RequireAuth/RequireAuth';
import Login from './Login/Login';
import { AuthProvider } from './Auth/Auth';
function App() {

  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/ajouter' element={<RequireAuth><Ajouter/></RequireAuth>} />
        <Route path='/liste' element={<RequireAuth><Liste /></RequireAuth>} />
        <Route path='/:id' element={<RequireAuth><Modifier /></RequireAuth>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
