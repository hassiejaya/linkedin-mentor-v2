const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/api/proxy', (req, res) => {
   const { url, headers } = req.query;
   axios({
     method: 'get',
     url: url,
     headers: headers,
   }).then(response=>{
     res.send(response.data);
   }).catch(error=>{
     console.log(error.message, "from proxy get!!");
     res.status(500).send('An error occurred',error.message);
   });
 });

 app.get('/api/proxy/image', (req, res) => {
    const { url, headers } = req.query;
    axios({
      method: 'get',
      url: url,
      headers: headers,
    }).then(response=>{
      res.send(response.data);
    }).catch(error=>{
      console.log(error.message, "from proxy get image");
      res.status(500).send('An error occurred',error.message);
    });
  });

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })