import axios from 'axios';
import UploadMedia from './UploadMedia';
import { useEffect, useState } from 'react';


const UploadPost = (props) => {
    const member_id = props.member_id;
   
    const post_text = props.post_text;

    const apiki = JSON.parse(localStorage.getItem('authKey'));
    const UploadTextPost = (member_id,post_text)=>{
        const data = {
            "author": `urn:li:person:${member_id}`,
            "lifecycleState": "PUBLISHED",
            "specificContent": {
              "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                  "text": `${post_text}`
                },
                "shareMediaCategory": "NONE"
              }
            },
            "visibility": {
              "com.linkedin.ugc.MemberNetworkVisibility": "CONNECTIONS"
            }
          };
          const headers = {
            'Authorization': `Bearer ${apiki.access_token}`,
            'Content-Type': 'application/json',
            'x-li-format': 'json'
          };
    
          axios.post('http://localhost:5000/api/proxy/post', {
            url: 'https://api.linkedin.com/v2/ugcPosts',
            data: data,
            headers: headers
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
            console.log(error);
            });
    }
 



    return ( <div className="UploadPost">
        {apiki&&<button onClick={()=>{UploadTextPost(member_id,post_text)}}> Upload Text Post</button>}
        <UploadMedia ACCESS_TOKEN = {apiki.access_token} USER_ID={member_id }   />
    </div> );
}
 
export default UploadPost;