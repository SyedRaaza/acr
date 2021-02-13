import React from 'react';

const HomeRoutes = [
    {
		path: '/homeroute',
		component: React.lazy(() => import('./landing'))
	}
]

export default HomeRoutes;