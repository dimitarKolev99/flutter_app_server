const express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      port = 3000,
      app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function (req, res) { 
  res.redirect('https://dimitarkolev99.github.io/#/');
});

app.listen(process.env.PORT || port);
