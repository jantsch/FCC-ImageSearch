/**
 * Module dependencies.
 */

var express = require('express');
var db = require('./config/db');
var mongoose = require('mongoose');

var app = express();
mongoose.connect(db.url);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');


// CONTROLLERS
var routes = require('./routes/index');
app.use('/api', routes);



//MODELS
var HistoryEntry = require('./models/historyEntry');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.settings.port);
console.log("Starting app in port: " + app.settings.port)