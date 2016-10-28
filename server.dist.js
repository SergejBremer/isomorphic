'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _indexPage = require('./components/indexPage');

var _indexPage2 = _interopRequireDefault(_indexPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

server.get('/', function (req, res) {
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_indexPage2.default));
  res.send('<!DOCTYPE html>' + html);
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
