import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Design
import Template from '../../components/Template';

// Routes
import Home from '../Home';
import Posts from '../Posts';
import NotFound from '../NotFound';

const App = () => (
    <BrowserRouter>
		<Template>
			<Switch>
				<Route className="Home" exact path="/" component={Home} />
				<Route className="Posts" exact path="/posts" component={Posts} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Template>
    </BrowserRouter>
);

export default App;
