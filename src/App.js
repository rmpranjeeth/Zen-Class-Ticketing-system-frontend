import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import ErrorPage from './components/pages/ErrorPage'



export default function App() {
    const user = localStorage.getItem('token')
    return (
        <Router>
            <Routes>
                <Route exact path="/landing" element={ <LandingPage /> } />
                <Route path="/login" exact element={ <LoginPage /> } />
                <Route path="/register" exact element={ <RegisterPage /> } />
                <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
                {user && <Route path="/" exact element={ <HomePage /> } />}
                <Route path="/" exact element={ <Navigate replace to = "/landing" /> } />
                <Route path="*" element={<ErrorPage /> } />
            </Routes>
            <Footer />
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="#" target="_blank">rmpranjeeth</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}