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
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;


const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback);
  });
};

const url = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';

const beforeDownload = +new Date;
/* download(url, path, () => {
    console.log('✅ Done!');
    const afterDownload = +new Date;
    console.log(afterDownload - beforeDownload);
}); */


app.listen(process.env.PORT || port);
console.log(`Server listening on port: ${port}`);
