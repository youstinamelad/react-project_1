import { Alert } from "@mui/material";
import { Paper } from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle';
import StaticDatePickerLandscape from "./Date";

const Card =()=>{
    return(
        <div>
<Paper elevation={3}  className="mt card_width">
    <div>
    <button type="button" class="btn "  > NEXT</button>
    <h4 ClassName="ml-10">hello </h4>
    </div>
    <Alert severity="info">
  <AlertTitle></AlertTitle>
  This is an info alert — <strong>check</strong>
 

</Alert>
    </Paper>
    
        </div>
    )
    }


export default Card;