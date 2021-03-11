import React from 'react';

const ISODashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/apps/dashboards/ISO',
            component: React.lazy(() => import('./ISODashboardApp'))
        }
    ]
}

export default ISODashboardAppConfig;