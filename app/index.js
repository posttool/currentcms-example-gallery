var express = require('express');
var mongoose = require('mongoose');
var current = require('currentcms');
var cms = new current.Cms({
  config: require('./config'),
  models: require('./models'),
  workflow: require('./workflow'),
  permission: require('./permission')
});

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
//app.use(favicon(__dirname + '/public/favicon.ico'));

var PUBLISHED = cms.module.workflow.PUBLISHED;
var Exhibition = cms.meta.model('Exhibition');
var News = cms.meta.model('News');
var Artist = cms.meta.model('Artist');

app.get('/', function (req, res) {
  Exhibition.find({state: PUBLISHED}, null, {sort: 'date'}, function (err, exhibits) {
    News.find({state: PUBLISHED}, function (err, news) {
      res.render('index', {exhibits: exhibits, news: news});
    });
  });
});
app.get('/artists', function (req, res) {
  Artist.find({state: PUBLISHED}, null, {sort: 'last_name'}, function (err, artists) {
    res.render('artists', {artists: artists});
  });
});
app.get('/artist/:id', function (req, res) {
  Artist.findOne({_id: req.params.id, state: PUBLISHED}, function (err, artist) {
    res.render('artist', {artist: artist});
  });
});

app.use(cms.app);
app.listen(cms.config.serverPort);
console.log('listening on ' + cms.config.serverPort);


