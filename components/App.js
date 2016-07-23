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
