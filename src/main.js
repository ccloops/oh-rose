import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
const express = require('express');
const app = express();

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<App/>, container);


app.get('/', (req, res) => res.send('build/index.html'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));