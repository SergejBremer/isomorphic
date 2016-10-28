import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/partials/title';
import Articles from './components/partials/articles';

require('./styles/style.less');

ReactDOM.render(<Title title="title" />, document.getElementById('header'));
ReactDOM.render(<Articles />, document.getElementById('main'));
