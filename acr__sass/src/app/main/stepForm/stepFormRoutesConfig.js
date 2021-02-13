import React from 'react';
import { Redirect } from 'react-router-dom';
import StepFormRoute from './stepFormRoutes';

const StepFormRouteConfig = {
	routes: [
		{
			exact:true,
			path: '/home/invitemembers',
			component: React.lazy(() => import('./stepFormParent')),
			routes: [
				...StepFormRoute,
				{
					exact:true,
					path: '/home/stepform',
					component: () => <Redirect to="./stepFormParent" />
				}
			]
		}
	]
};

export default StepFormRouteConfig;