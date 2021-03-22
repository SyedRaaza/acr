import React from 'react';

const ComplianceDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/apps/dashboards/compliance/iso',
            component: React.lazy(() => import('./ComplianceDashboardApp'))
        }
    ]
}

export default ComplianceDashboardAppConfig;