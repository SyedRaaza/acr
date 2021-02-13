import React from 'react';

const StepFormRoute = [
    {
        exact:true,
		path: '/home/invitemembers',
		component: React.lazy(() => import('./stepFormParent'))
	}
]

export default StepFormRoute;