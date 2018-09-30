import React from 'react';
import ReactDOM from 'react-dom';
import AppBase from './components/AppBase';
import './styles/styles.scss';

const Index = () => (
  <div>
    <AppBase />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('main'));

