if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const express = require('express');
const app = express();
const volleyball = require('volleyball');


app.set('port', (process.env.PORT || 5000));

const fetchData = require('./api/routes/fetch')

app.use(volleyball);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/fetch', fetchData);

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
  })
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
      error: {
        message: error.message
      }
    })
  })
  
  app.listen(app.get('port'), console.log(`Server is up and running on port: ${app.get('port')}`));