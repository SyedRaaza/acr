import MomentUtils from '@date-io/moment';
import '@fake-db';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import history from '@history';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { Router } from 'react-router-dom';
import AppContext from './AppContext';
import { Auth } from './auth';
import routes from './fuse-configs/routesConfig';
import store from './store';
import {useState , useEffect} from 'react';
import LandingPage from "../home/landing";


const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

const App = () => {
	const [view , setView] = useState(false);
	const handleView = () => {
		setView(false)
	}
	return (
		<React.Fragment>
			<AppContext.Provider
				value={{
					routes
				}}
			>
				<StylesProvider jss={jss} generateClassName={generateClassName}>
					<Provider store={store}>
						<MuiPickersUtilsProvider utils={MomentUtils}>
							<Auth>
								<Router history={history}>
									<FuseAuthorization>
										<FuseTheme>
											{/* <FuseLayout /> */}
											{view ? <LandingPage handleView={handleView} /> : <FuseLayout />}
										</FuseTheme>
									</FuseAuthorization>
								</Router>
							</Auth>
						</MuiPickersUtilsProvider>
					</Provider>
				</StylesProvider>
			</AppContext.Provider>
		</React.Fragment>
	);
};

export default App;
