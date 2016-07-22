var React = require('react');
var ReactDOM = require('react-dom');
var LoginBox = require('./LoginBox');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
        <LoginBox />
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
