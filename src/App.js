
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin';
// בשביל הודעות טוסט צריך קונטיינר שיהיה באפ ואת
// הסי אס אס שלו
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { adminRoutes } from './comps_admin/adminRoutes';
import ClientNav from './client_comps/clientNav.js';
import Home from './client_comps/home';
import Learn from './learn/learn';
import LogIn from './users/logIn';
import Register from './users/register';
import { AuthProvider } from './context';




function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
      
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        <Route path="/*" element={<ClientNav />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}/>

        {/* ADMIN ROUTES */}
        {adminRoutes()}
  
      </Routes>
      <Routes>
      <Route path="/learn/" element={< Learn/>} />
      </Routes>
      <Routes>
      <Route path="/user/login" element={< LogIn/>} />
      <Route path="/user/register" element={< Register/>} /> 
     <Route path="/*" element={<h2>Page 404</h2>}/>

      </Routes>
      <ToastContainer position="top-left" theme="colored" />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
