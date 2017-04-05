var React = require('react');
var ReactDOM = require('react-dom');
//var Router = require('react-router').Router;
//var routes = require('./config/routes');

var Movie = React.createClass({
	render: function () {
		return (
				<div className="card text-center">
					<img className="card-img-top" src="" alt="Card image cap"/>
				     <div className="card-block">
						<h1 className="card-title">{this.props.title}</h1>
						<p className="card-text">{this.props.genre}</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
		);
	}
});

ReactDOM.render(
	<div className="card-group">
		<Movie title="Xmen" genre="action" />
		<Movie title="Ghost in the Shell" genre="fantasy" />
		<Movie title="Logan" genre="action" />
	</div>
	, document.getElementById('app')
);