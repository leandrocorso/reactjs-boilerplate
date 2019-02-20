import React, { Component } from 'react';
import { connect } from 'react-redux';

import TasksForm from './TasksForm';

class Tasks extends Component {

	componentDidMount() {
		this.renderTasks();
	}

	// Mount the JSX for received tasks
	renderTasks = () => {
        let index = 0
		return (
			this.props.tasksReducer.map(e => (
                <ul className="post" key={index++}>
                    <li>{e.task}</li>
                </ul>
            ))
		);
	}

	render() {
		return (
            <React.Fragment>
				<h2>Tasks</h2>
                { this.renderTasks() }
                { <TasksForm /> }
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	tasksReducer: state.tasks,
});

export default connect(mapStateToProps)(Tasks);
