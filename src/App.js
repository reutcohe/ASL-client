
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


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        <Route path="/*" element={<ClientNav />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<h2>Page 404</h2>}/>

        {/* ADMIN ROUTES */}
        {adminRoutes()}
  
      </Routes>
      <ToastContainer position="top-left" theme="colored" />
    </BrowserRouter>
  );
}

export default App;
