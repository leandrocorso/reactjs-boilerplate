import React, { Component } from 'react';

import { Service, ExampleService } from '../../services';

class Posts extends Component {

	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		}
	}

	componentDidMount() {
		this._getPosts();
	}

	// Get the posts from API service
	async _getPosts() {
		const posts = await Service.exec(ExampleService.fetchPosts);
		posts.error ? console.error(posts.error) : this.setState({ posts });
	}

	// Mount the JSX for received posts
	renderPosts() {
		return (
			this.state.posts.map(e => (
                <div className="post" key={e.id}>
                    <h3>{e.title}</h3>
                    <p>{e.body}</p>
                </div>
            ))
		);
	}

	render() {
		return (
            <React.Fragment>
				<h2>Posts</h2>
        		{ this.state.posts.length > 0 && this.renderPosts() }
			</React.Fragment>
		);
	}
}

export default Posts;
