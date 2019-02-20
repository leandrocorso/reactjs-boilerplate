import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Design
import Template from '../../components/Template';

// Routes
import Home from '../Home';
import Posts from '../Posts';
import Tasks from '../Tasks';
import NotFound from '../NotFound';

// Redux
import store from '../../redux/store';

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Template>
				<Switch>
					<Route className="Home" exact path="/" component={Home} />
					<Route className="Posts" exact path="/posts" component={Posts} />
					<Route className="Tasks" exact path="/tasks" component={Tasks} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Template>
		</BrowserRouter>
	</Provider>
);

export default App;
