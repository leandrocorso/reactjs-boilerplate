import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReposForm from './ReposForm';

class Repos extends Component {

	render() {
		return (
            <React.Fragment>
				<h2>Github repositories</h2>
				{ <ReposForm /> }
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	reposReducer: state.repos,
});

export default connect(mapStateToProps)(Repos);
