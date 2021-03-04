import React from 'react';
import { Redirect } from 'react-router-dom';
import AssessmentRoute from './assessmentRoutes';

const AssessmentRouteConfig = {
	routes: [
		{
			exact:true,
			path: '/apps/assessment',
			component: React.lazy(() => import('./assessments')),
			routes: [
				...AssessmentRoute,
				// {
				// 	exact:true,
				// 	path: '/apps/assessment',
				// 	component: () => <Redirect to="./assessments" />
				// }
			]
		}
	]
};

export default AssessmentRouteConfig;