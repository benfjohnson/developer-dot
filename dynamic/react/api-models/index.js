import 'babel-polyfill';
import Model from './model';
import React from 'react';
import {render} from 'react-dom';

const model = window.PAGE_MODEL;
const name = window.MODEL_NAME;

render(<Model m={model} name={name} />, document.getElementById('react-root'));
