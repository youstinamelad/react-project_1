
import * as React from "react";
import Appbar from "./components/Appbar";
//import Typography from '@mui/material/Typography';


import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Booking from "./components/Booking";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
import Date from "./components/Date";


const App = () => {
  return (
    <div>
      
      <Appbar></Appbar>
      
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        {/* <Route path="/Profile" element={<Profile/>}></Route> */}
        <Route path="/Booking" element={<Booking/>}></Route>
        <Route path="/" element={<Index/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
        <Route path="/Date" element={<Date/>}></Route>
            

      </Routes>
   
    </div>
  );
};

export default App;
