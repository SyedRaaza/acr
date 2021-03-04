import React from 'react';

const AssessmentRoute = [
    {
        exact:true,
		path: '/apps/assessment',
		component: React.lazy(() => import('./assessments'))
	}
]

export default AssessmentRoute;