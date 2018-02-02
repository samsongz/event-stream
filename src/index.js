import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const mount = (node, props) => {
  ReactDOM.render(<App {...props} />, node);
}
if (window.ConstructionOS) {
  window.ConstructionOS.Applications.EventStream = {
    mount: mount
  };
}
else {
  ReactDOM.render(<App />, document.getElementById("root"));
}