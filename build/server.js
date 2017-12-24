import express from 'express';
import path from 'path';
import config from './config';
import open from 'open';
import chalk from 'chalk';
import webpack from 'webpack';
import wpConfig from '../webpack.config.dev';
import wpDevMw from 'webpack-dev-middleware';

/* eslint-disable no-console */
const app = express();
const wpCompiler = webpack(wpConfig);

//app.use(express.static('public'));

//app.set('view engine', 'ejs');

app.use(wpDevMw(wpCompiler, {
  noInfo: true,
  publicPath: wpConfig.output.publicPath
}));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
  //res.render('index', { port: config.port })
});

app.listen(config.port, (err) => {
  if(err){
    console.info(chalk.redBright(err));
  } else {
    console.info(chalk.green(`Running on port ${config.port}.`));
    open(chalk.green(`http://localhost:${config.port}`));
  }
});
