const express = require("express");

const cors = require("cors");

const passport = require("passport");

const { errors } = require("celebrate");

const bodyParser = require('body-parser');

const app = express();

app.enable("trust proxy");

app.use(cors());

app.use(passport.initialize());

app.use(require('method-override')());

app.use(express.json());

app.use(express.urlencoded({ extended:false }));

app.use(bodyParser.urlencoded({ extended: true })); 


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use((err, req, res, next) => {
  console.error(err.stack);
  next(err);
})

app.use(errors());

app.use((err, req, res, next) => {
  if (err.status === 401) {
    return res.status(err.status)
      .send({
        statusCode: 401,
        error: 'Unauthorized access',
        message: err.message,
      })
      .end();
  }
  
  return res.status(err.status || 500)
    .send({
      statusCode: err.status || 500,
      error: 'Internal server error',
      message: err.message,
    })
    .end();
});

module.exports = app;