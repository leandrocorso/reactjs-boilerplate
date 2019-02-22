import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Template extends Component {

	render() {
		return (
			<React.Fragment>
                <h1>React JS boilerplate</h1>
				<ul>
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink exact to="/posts">Posts</NavLink></li>
					<li><NavLink exact to="/tasks">Tasks</NavLink></li>
					<li><NavLink exact to="/github-repositories">Github repositorioes</NavLink></li>
				</ul>
				{this.props.children}
			</React.Fragment>
		);
	}
}

export default withRouter(Template);