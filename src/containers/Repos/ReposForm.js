import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/repos.actions';

const initialState = { userName: 'leandrocorso' }

class ReposForm extends Component {

	constructor(props) {
		super(props);
		this.state = initialState;
		console.log(props)
	}

	componentDidMount() {
		this.fetchReposByUserName();
	}

	// Get a Github repository by user name
	fetchReposByUserName = () => {
		const cu = this.props.fetchReposByUserName(this.state.userName);
		console.log('>>>', cu)
		this.setState({ 
            userName: initialState.userName,
		})
	}

	render() {
		return (
			<Fragment>
                <label forhtml="userName">Nome do usuário do GitHub</label>
                <br />
				
                <input 
					id="userName"
					onChange={(e) => this.setState({ userName: e.target.value })}
					value={ this.state.userName }
					/>
					<br />
		
				<button
					onClick={this.fetchReposByUserName}
					>Buscar repositório
					</button>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {reposReducer: state.repos,}
};

const mapDispatchToProps = dispatch => 
	bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReposForm);
