import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Header from './Components/Navbar/Header';
import AdminDashboard from './Pages/AdminDashboard';
import AdminLogin from './Pages/AdminLogin';
import AdminRegister from './Pages/AdminRegister';
import CustomerTransactions from './Pages/CustomerTransactions';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function RouteComponent() {
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/adminlogin' element={<AdminLogin />} />
                    <Route path='/signup' element={<Register />} />
                    <Route path='/dashboard' element={<AdminDashboard />} />
                    <Route path='/transactions/:userId' element={<CustomerTransactions />} />
                </Routes>
        </Router>
    )
}

export default RouteComponent;