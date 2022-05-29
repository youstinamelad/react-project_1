import * as React from "react";
import TestPost from "./TestPost";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Alert, Checkbox } from "@mui/material";
import { Paper } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import { useRecoilState } from "recoil";
import { data_special_services, selected, services_data_color, services_data_treatment } from "../atoms";
import { services_data_hair } from "../atoms";

import { Construction } from "@mui/icons-material";
import axios from "axios";
import StaticDatePickerLandscape from "./Date";



 



export default function ControlledAccordions(props) {

  const array_servicesFun=(response)=>{
    const {data}=response
    
    setservices_data_hair(data[0].services, _services_data_hair);
    setservices_data_color(data[1].services, _services_data_color);
    setservices_data_treatment(data[2].services, _services_data_treatment);
    setservices_data_special_services(data[4].services, _data_special_services);

    }
    const content_of_services =()=>{
      const api_url = `https://fci-back-end.herokuapp.com/services`;
      axios.get(api_url).then(array_servicesFun)
    
    }

  const [_selected, setSelected] = useRecoilState(selected);
  const [_services_data_hair, setservices_data_hair] = useRecoilState(services_data_hair);
 
  const [_services_data_color, setservices_data_color] = useRecoilState(services_data_color);
  const [_services_data_treatment, setservices_data_treatment] = useRecoilState(services_data_treatment);
  const [_data_special_services, setservices_data_special_services] = useRecoilState(data_special_services);
 
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange_check = (event, item) => {


    var newArry

    console.log(newArry)
    console.log(_selected)

    function getIndex(ob) {
      return _selected.findIndex(obj => obj.name === ob)

    }
    
 
    if (event.target.checked) {
 
      console.log(newArry)
      console.log(_selected)
      console.log(getIndex(item.name))
      if (getIndex(item.name) === -1) {
        newArry = _selected.concat([item])
        setSelected(newArry, _selected);
        
      }
      console.log(_selected)

    } else if (event.target.checked === false) {
      console.log(event.target.checked)
 
      if (getIndex(item.name) !== -1) {
        const indeToRemove = getIndex(item.name);
        const p1 = _selected.slice(0, indeToRemove);
        const p2 = _selected.slice(indeToRemove + 1, _selected.length);
        let result = []
        result = result.concat(p1)
        result = result.concat(p2)
        console.log(result)
        setSelected(result, _selected)

      }
      console.log(_selected)

    }

    console.log(_selected)

    console.log(newArry)


  };
  console.log(_selected);
  const finalSelectedItems = _selected.map(
    (item, index) => {
      return
      <div>
        <div>
          <TestPost totaldata={item}></TestPost>
        </div>
      </div>
    }
  )
  console.log(_services_data_hair)
  
  const result_Arry = _services_data_hair.map(
    (item, index) => {
      return <div className="lef item_name">
        <div >

          <div>
            <TestPost totaldata={item}></TestPost>
          </div>

          <div>
            <Checkbox defaultchecked onChange={(e) => handleChange_check(e, item)
          
            } />

          </div>
        </div>
      </div>

    }
  )

  const result_Arry_color = _services_data_color.map(
    (item, index) => {
      return <div className="lef item_name">
        <div >

          <div>
            <TestPost totaldata={item}></TestPost>
          </div>

          <div>
            <Checkbox defaultchecked onChange={(e) => handleChange_check(e, item)} />

          </div>
        </div>
      </div>

    })

    const result_Arry_treatment = _services_data_treatment.map(
      (item, index) => {
        return <div className="lef item_name">
          <div >
  
            <div>
              <TestPost totaldata={item}></TestPost>
            </div>
  
            <div>
              <Checkbox defaultchecked onChange={(e) => handleChange_check(e, item)} />
  
            </div>
          </div>
        </div>
  
      }
    )

    const result_Arry_special_services = _data_special_services.map(
      (item, index) => {
        return <div className="lef item_name">
          <div >
  
            <div>
              <TestPost totaldata={item}></TestPost>
            </div>
  
            <div>
              <Checkbox defaultchecked onChange={(e) => handleChange_check(e, item)} />
  
            </div>
          </div>
        </div>
  
      }
    )
  console.log(_selected)
  const resultPrintarray = _selected.map(
    (item, index) => {
      return <div>

        <TestPost totaldata={item}></TestPost>
      </div>

    }
  )
  console.log(resultPrintarray)



  console.log(finalSelectedItems)

  return (

    
    <div className="container">
      <div className="lef">
        <div className="row">
          <div className="col-8" >

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  HaircutsI
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {result_Arry}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  All-Over color
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  
{        result_Arry_color}
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  waxing
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  
{result_Arry_treatment}
                 
                </Typography>

              </AccordionDetails>
            </Accordion>


            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Special Services
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
{result_Arry_special_services}
                  
                </Typography>

              </AccordionDetails>
            </Accordion>
          </div>

          <div class="col-4 ">
            <Paper elevation={3} className="mt  card_width">
              <div>




                <h4 ClassName="ml-10">Salon </h4>
                <button type="button" class="btn btn-outline-primary" onClick={(e)=>{
                  
                  e.preventDefault();
                  window.location.href='/Date';
                }}> NEXT</button>
                 

              </div>
              <Alert severity="info">
                <AlertTitle>info</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
              </Alert>
              {finalSelectedItems}

              {<div className="p1">  
                {/* {finalSelectedItems} */}
                {resultPrintarray}
              </div>}

            </Paper>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-outline-primary" onClick={content_of_services} > ShowData</button>

    </div>
    
  );
}
