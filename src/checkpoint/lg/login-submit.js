import express from 'express';
const app = express();
app.post('/login-submit', (req, res) => {
  const { username, password } = req.body;
  // Do something with the username and password, such as check if they are valid
  res.send('Logged in successfully');
});