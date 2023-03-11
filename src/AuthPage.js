import axios from 'axios';
import { useEffect, useState } from 'react';

const AuthPage = () => {
    const [htmlResponse, setHtmlResponse] = useState('');
    useEffect(()=>{
      axios.get('http://localhost:4000/api/oauth/v2/authorization',{
        params: {
          state: 'hassieState'
        },withCredentials: true
      })
      .then(response =>{
        console.log(response);
        setHtmlResponse(response.data);
      })
      .catch(error=>{
        console.log(error);
      })

    },[])
  


    return (
        <div className='authPage' dangerouslySetInnerHTML={{ __html: htmlResponse }}></div>
    );
}
 
export default AuthPage;