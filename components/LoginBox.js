import { FormGroup, FormControl, Well } from 'react-bootstrap';
import React, {Component} from 'react';

export default class LoginBox extends Component {
  render() {
    return (
      <div id='LoginBox'>
        <form>
        <Well>
        
           <FormGroup controlId="formBasicText">
             <FormControl
               type="text"
              // value={this.state.value}
               placeholder="Username"
              // onChange={this.handleChange}
             />
             <FormControl.Feedback />
             <FormControl
               type="text"
              // value={this.state.value}
               placeholder="Password"
              // onChange={this.handleChange}
             />
             <FormControl.Feedback />
           </FormGroup>
           </Well>
         </form>

      </div>
    )
  }
}

// render(<App />, document.getElementById('main-container'));

// var React = require('react');
//
// // import 'normalize.css/normalize.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import React, { Component } from 'react';
// // // import Header from './Header';
// // // import Sidebar from './Sidebar';
// // import { Grid, Row, Col } from 'react-bootstrap';
// var Button = require('react-bootstrap/lib/Button');
//
//
// var LoginBox = React.createClass({
//   render: function () {
//     return (
//       <div id='LoginBox'>
//         LoginBox
//         <input type='text' placeholder='Username' />
//         <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
//         {/*<div className='form-group'>
//           <input type='text' placeholder='Username' />
//           <input type='password' placeholder='Password' />
//         </div>
//         <button type='submit' onClick={this.login.bind(this)}>Submit</button>*/}
//       </div>
//     )
//   }
// });
//
// module.exports = LoginBox;
