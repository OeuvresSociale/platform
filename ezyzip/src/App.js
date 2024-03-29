import React from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addemployee from './Pages/Addemployee.jsx';
import Employeelist from './Pages/Employeelist.jsx';
//import Header from './Components/Header.jsx'
import './App.css'
import Usertable from './Components/Usertable.jsx';
//import Formulaire from './Components/Formulaire.jsx';

//import Modefyuser from './Components/Modefyuser.jsx';
//import Deleteuser from './Components/Deleteuser.jsx';
import { Login } from './Pages/Login.jsx';
import Demandetype from './Pages/Demandetype.jsx';



const App = () => {
  return (
    <BrowserRouter >
    
        <Routes>
          <Route path='/employeelist/Addemployee' element={<Addemployee />} />
          <Route path='/employeelist' element={<Employeelist />} />
         <Route path='/login' element={<Login />} />
         <Route path='/usertable' element={<Usertable />} />
    <Route path='/tables/demandetype' element={<Demandetype />} />
        </Routes>
     
     
    </BrowserRouter>
    
  );
};

export default App;
