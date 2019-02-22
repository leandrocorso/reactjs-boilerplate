import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Design
import Template from '../../components/Template';

// Routes
import Home from '../Home';
import Posts from '../Posts';
import Tasks from '../Tasks';
import Repos from '../Repos';
import NotFound from '../NotFound';

// Redux
import store from '../../store';

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Template>
				<Switch>
					<Route className="Home" exact path="/" component={Home} />
					<Route className="Posts" exact path="/posts" component={Posts} />
					<Route className="Tasks" exact path="/tasks" component={Tasks} />
					<Route className="Repos" exact path="/github-repositories" component={Repos} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Template>
		</BrowserRouter>
	</Provider>
);

export default App;
