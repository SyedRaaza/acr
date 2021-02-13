import React from 'react';
import { Redirect } from 'react-router-dom';
import HomeRoutes from './homeRoutes';

const HomeRoutesConfig = {
	routes: [
		{
			path: '/homeroute',
			component: React.lazy(() => import('./landing')),
			routes: [
				...HomeRoutes,
				{
					path: '/homeroute',
					component: () => <Redirect to="/homeroute" />
				}
			]
		}
	]
};

export default HomeRoutesConfig;
