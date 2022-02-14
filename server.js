const express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      port = 3000,
      app = express(),
      mongoose = require('mongoose'),
      WebSocket = require('ws'),
      cors = require('cors');

      require('dotenv').config();
      
//connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));
      

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



//init public folder
app.use(express.static(path.join(__dirname, 'public')));

//Config CORS
app.use(cors());

const a = Math.random();

const wss = new WebSocket.Server({ server : app });

wss.on('connection', function connection(ws, request, client) {
   

  ws.on('message', function message(data) {
    console.log(`Received message ${data} from user ${client}`);
  });
});

//Init routes
app.use('/api', require('./routes/api'));

//default route
app.get('/', function (req, res) { 
  res.sendFile(path.join(__dirname+'/cv.html'));
});

//error logging
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err._message });
});

app.listen(process.env.PORT || port);
