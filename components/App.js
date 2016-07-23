

// import 'normalize.css/normalize.css';
// import 'bootstrap/dist/css/bootstrap.css';

import { Grid, Row, Col } from 'react-bootstrap';
import React, {Component} from 'react';
import {render} from 'react-dom';
import LoginBox from './LoginBox';


export default class App extends Component {
  render() {
    return (
      <div id='App'>
        <LoginBox />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));

// var React = require('react');
// var ReactDOM = require('react-dom');
// var LoginBox = require('./LoginBox');
//
//
// var App = React.createClass({
//   render: function () {
//     return (
//       <div id='App'>
//         App
//         <LoginBox />
//       </div>
//     )
//   }
// });
//
// module.exports = App;



// ReactDOM.render(<App />, document.getElementById('main-container'));
