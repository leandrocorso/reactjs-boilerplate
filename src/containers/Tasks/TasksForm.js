import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/tasks.actions';

const initialState = { task: '' }

class TasksForm extends Component {

	constructor(props) {
		super(props);
		this.state = initialState;
	}

	// Add a new task
	addTask = () => {
		this.props.addTask(this.state.task);
		this.setState({ 
            task: initialState.task,
		})
	}

	render() {
		return (
			<Fragment>
				<input 
					type="task"
					onChange={(e) => this.setState({ task: e.target.value })}
					value={ this.state.task }
					/>
					<br />
		
				<button
					onClick={this.addTask}
					>Salvar novo post
					</button>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	tasksReducer: state.tasks,
});

const mapDispatchToProps = dispatch => 
	bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TasksForm);
