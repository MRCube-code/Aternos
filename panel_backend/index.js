const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

let running = false;

app.get('/', (req,res)=>{
  res.send('MC Mobile Host Running');
});

app.post('/start', (req,res)=>{
  running = true;
  exec('sh ~/mc_mobile_host_v2/termux/start.sh');
  res.json({status:'started'});
});

app.post('/stop', (req,res)=>{
  running = false;
  exec('sh ~/mc_mobile_host_v2/termux/stop.sh');
  res.json({status:'stopped'});
});

app.get('/status', (req,res)=>{
  res.json({running});
});

app.listen(3000, ()=> console.log('Panel running on 3000'));
