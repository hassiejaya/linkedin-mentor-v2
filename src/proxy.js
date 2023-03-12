const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/proxy',(req,res)=>{
  const{url,data, headers} = req.body;

  axios({
    method: 'post',
    url: url,
    data: data,
    headers: headers,
  }).then(response=>{
    res.send(response.data);
  }).catch(error=>{
    console.log(error, "from proxy!!");
    console.data;
    //res.status(500).send('An error occurred');
  });
});

app.use('/api/proxy', (req, res) => {
  console.log(req.query);
  const { url, headers } = req.query;
  console.log(req.url,"url",req.headers,'headers');
  axios({
    method: 'get',
    url: url,
    headers: req.headers,
    rejectUnauthorized: false
  }).then(response=>{
    res.send(response.data);
  }).catch(error=>{
    console.log(error, "from proxy get!!");
    res.status(500).send('An error occurred',error);
  });
});

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});