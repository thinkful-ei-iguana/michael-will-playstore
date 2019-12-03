const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const playstore = require('./playstore.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/apps', (req, res) => {
  const {sort, genres} = req.query;

  // if(sort){
  //   if(!['rating', 'app'].includes(sort)) {
  //     return res.json();
  //   }
  // }

  // if(genres){
  //   if(!['action', 'puzzle', 'strategy', 'casual', 'arcade', 'card'].includes(genres)){
  //     return res
  //       .status(400)
  //       .send('Genre must be one of the following: Action, Puzzle, Strategy, Casual, Arcade, or Card.');
  //   }
  //   return res.json();
  // }

  let results = playstore
    .filter(singleApp => 
      singleApp
        .App
        .toLowerCase()
        .includes(sort.toLowerCase())
    );
  if(sort){
    results
      .sort((a,b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      });
  }
  res.
    json(results);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});