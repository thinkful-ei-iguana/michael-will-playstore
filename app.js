const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const playstore = require('./playstore.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/apps', (req, res) => {
  const {sort, genres} = req.query;
  if(sort){
    if(!['rating', 'app'].includes(sort)) {
      //some stuff in here//
    }
  }

  if(genres){
    if(!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)){
      //some stuff in here
    }
  }

  let results = playstore
    .filter(singleApp => 
      singleApp
        .App
        .toLowerCase()
        .includes(sort.toLowercase())
    );
  res.json(results);
});