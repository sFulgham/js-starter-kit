import express from 'express';
import config from './config';
import open from 'open';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('index', { port: config.port })
})

app.listen(config.port, (err) => {
  if(err){
    console.info(err);
  } else {
    console.info(`Running on port ${config.port}.`);
    open(`http://localhost:${config.port}`);
  }
})
