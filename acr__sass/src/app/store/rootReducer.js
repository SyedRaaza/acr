import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import userReducer from './redux/users/userReducer';
import cisReducer from './redux/CIS/cisReducer';
import appStateReducer from './redux/applicationState/applicationStateReducer';
import newUserReducer from './redux/userData/userDataReducer';
import cisMaturityDataReducer from './redux/CISMaturityData/CISMaturityDataReducer';
import cisDashboardDataReducer from './redux/dashboardCis/dashboardCisReducer';
import showAssessmentDataReducer from './redux/ShowAssessment/showAssessmentReducer';

const createReducer = asyncReducers => (state, action) => {
	const combinedReducer = combineReducers({
		auth,
		fuse,
		i18n,
		userReducer,
		cisReducer,
		appStateReducer,
		newUserReducer,
		cisMaturityDataReducer,
		cisDashboardDataReducer,
		showAssessmentDataReducer,
		...asyncReducers
	});

	/*
	Reset the redux store when user logged out
	 */
	if (action.type === 'auth/user/userLoggedOut') {
		state = undefined;
	}

	return combinedReducer(state, action);
};

export default createReducer;
