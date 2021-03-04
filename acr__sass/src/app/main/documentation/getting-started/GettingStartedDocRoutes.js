import React from 'react';

const GettingStartedDocRoutes = [
	{
		path: '/apps/settings/management',
		component: React.lazy(() => import('./introduction/IntroductionDoc'))
	},
	{
		path: '/apps/settings/profile',
		component: React.lazy(() => import('./installation/InstallationDoc'))
	},
	{
		path: '/apps/settings/departments',
		component: React.lazy(() => import('./git-repository/GitRepositoryDoc'))
	},
	{
		path: '/apps/settings/branding',
		component: React.lazy(() => import('./branding/branding'))
	}
];

export default GettingStartedDocRoutes;
