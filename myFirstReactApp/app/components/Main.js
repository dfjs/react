var React = require('react');
var ReactDOM = require('react-dom');

  var Main = React.createClass({
    render: function(){
      return(
        <div>
          <main>
            <p>Hello World, welcome to my site</p>
          </main>
        </div>
      )
    }
  });

  ReactDOM.render(<Main />, document.getElementById('app'))