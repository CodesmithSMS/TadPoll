import { FormGroup, FormControl, Well, Radio } from 'react-bootstrap';
import React, {Component} from 'react';

export default class LoginBox extends Component {
  render() {
    return (
      <div id='LoginBox'>
        <form>
        <Well>
        <h3>How awesome is this presentation?</h3>
            <FormGroup>
              <Radio>Not very awesome</Radio>
              {' '}
              <Radio>Awesome</Radio>
              {' '}
              <Radio>Very awesome</Radio>
              {' '}
              <Radio>Ridiculously effing awesome</Radio>
            </FormGroup>
           </Well>
         </form>
      </div>
    )
  }
}
