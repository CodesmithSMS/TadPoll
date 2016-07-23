import { FormGroup, FormControl, Radio, Button, Well } from 'react-bootstrap';
import React, {Component} from 'react';

export default class LoginBox extends Component {
 render() {
   return (
     <div id='LoginBox'>
       Hello
       <form>
       <Well>
       <h3>How awesome is this presentation?</h3>
           <FormGroup>
             <Radio>Kinda of awesome</Radio>
             {' '}
             <Radio>Pretty awesome</Radio>
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
