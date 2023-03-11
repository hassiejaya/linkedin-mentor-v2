import { useEffect, useState } from "react";
import axios from 'axios';


const AuthCalback = () => { 
    const [thedata, setThedata] = useState('');
   
    const client_id = '86pe6qha0ri8b7';
    const client_secret= 'UO0NP3fapEglTMwv';
    const redirect_uri='http://localhost:3000/callback';
    const queryParameters = new URLSearchParams(window.location.search);
   
  
    useEffect(()=>{
        setThedata(queryParameters.get("code"));
        window.$statee = queryParameters.get("state"); 

        
        axios.post('http://localhost:4000/api/proxy', {
            url: 'https://www.linkedin.com/oauth/v2/accessToken',
            data: `code=${thedata}&grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then(response => {
            console.log(response.data);
            window.token = response.data;
            })
            .catch(error => {
            console.log(error);
            });
       //window.close();     
         
    },[queryParameters])
 
    
    
    return ( <div className="callback">
      <h1>Callback</h1>
     <button onClick={()=>{window.close();}}> close window</button>
    </div> );

}
 
export default AuthCalback;