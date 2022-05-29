import { Accordion, AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

//import Typography from '@mui/material/Typography';
import Steper from "./Steper";
import Date  from "./Date";
import Time  from "./Time";
import Accordions from "./Accordions";
import "bootstrap/dist/css/bootstrap.css";
import StaticDatePickerLandscape from "./Date";
import Login from "./Login";
const Index=()=>{
    return(
        <div>
            
            
        <Steper></Steper>
        <Accordions></Accordions>
       
{/* <Login></Login> */}
        </div>
    );
};
export default Index;
