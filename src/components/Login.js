
import { Accordion, TextField } from '@mui/material';
import axios from 'axios'
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { data_special_services, selected, services_data_color, services_data_hair, services_data_treatment } from '../atoms';

 






export default function Login( ) {

   

    const [userName,setUserName]=useState('')
  const [password,setpassword]=useState('')
  // const [_selected, setSelected] = useRecoilState(selected);
  // const [_services_data_hair, setservices_data_hair] = useRecoilState(services_data_hair);
 
  // const [_services_data_color, setservices_data_color] = useRecoilState(services_data_color);
  // const [_services_data_treatment, setservices_data_treatment] = useRecoilState(services_data_treatment);
  // const [_data_special_services, setservices_data_special_services] = useRecoilState(data_special_services);
 
  // const array_servicesFun=(response)=>{
  //   const {data}=response
  //   console.log(data)
  //   console.log(data[0].services)
  //   setservices_data_hair(data[0].services, _services_data_hair);


  //   setservices_data_color(data[1].services, _services_data_color);
  //   setservices_data_treatment(data[2].services, _services_data_treatment);
  //   setservices_data_special_services(data[4].services, _data_special_services);

  //   }
   
//    { content_of_services}

    
  const login = async() => {

    const api_url = `https://fci-back-end.herokuapp.com/login`;
      
    const response = await axios.post(api_url,{
      userName , password
    });

        };

        
        const onUsernameChanged=(event)=>{

            setUserName(event.target.value)
            
        }
        const onpasswordChanged=(event)=>{
            setpassword(event.target.value)
            
        }
        

return( 

    <div class="log">
<div>

        
{/* <input />  */}

{/* <input onChange={onpasswordChanged }/> */}
<span className=" px-4">
          <div className=" mx-auto ">
          <TextField label={'userName'} className="mx-auto w-100" onChange={onUsernameChanged }/>
          <p>                       </p>
<TextField label={'Password'} className="mx-auto w-100" onChange={onpasswordChanged }/>
 <p>                    </p>

<div className="d-grid gap-2 d-md-flex justify-content-md-end">
  
<button type="button" class="btn btn-outline-primary" onClick={Login} > Login</button>

            <button type="button" class="btn btn-outline-primary" onClick={(e)=>{
                  e.preventDefault();
                  window.location.href='/';
                }} > Go To home</button>

          </div>
            </div>
</span>

    </div>
 </div>
)
}