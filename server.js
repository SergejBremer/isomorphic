import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import IndexPage from './components/indexPage';

let server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function (req, res) {
  let html = ReactDOMServer.renderToStaticMarkup(React.createElement(IndexPage));
  res.send('<!DOCTYPE html>' + html);
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
