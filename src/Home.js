import axios from 'axios';
import { useEffect } from 'react';
const Home = () => {
    const apiki = JSON.parse(localStorage.getItem('authKey'));
    const apiUrl = 'https://api.linkedin.com/v2/me';

    const headers = {
      'Authorization': `Bearer ${apiki.access_token}`,
      'Content-Type': 'application/json',
    };
    useEffect(()=>{
        axios.get('http://localhost:4000/api/proxy', {
                url: 'https://api.linkedin.com/v2/me',
                headers: {
                    'Authorization': `Bearer ${apiki.access_token}`,
                    'Content-Type': 'application/json',
                }
                })
                .then(response => {
                console.log(response.data)
                })
                .catch(error => {
                console.log(error);
                });
                

    },[])
    


    return ( <div className="Home">
       
       <h1>Home</h1>
        
    </div> );
}
 
export default Home;