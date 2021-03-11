import React , {useEffect} from 'react';
import FuseSearch from '@fuse/core/FuseSearch';
import FuseShortcuts from '@fuse/core/FuseShortcuts';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import clsx from 'clsx';
import { useSelector , useDispatch } from 'react-redux';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import FullScreenToggle from '../../shared-components/FullScreenToggle';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
import { setNewSettings } from 'app/store/fuse/settingsSlice';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
	root: {}
}));

function ToolbarLayout1(props) {
	const dispatch = useDispatch();
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(selectToolbarTheme);
	const organization = useSelector(state => state.newUserReducer.user.data[0].organization_data)
	const newUser = useSelector(state => state.newUserReducer.user);
	const settings = useSelector(({ fuse }) => fuse.settings.current);
	const classes = useStyles(props);

	//This block of code is for setting user theme.
	var customizeTheme = {
		palette: {
			type: 'light',
			primary: {
				light: '#b3d1d1',
				main: '#006565',
				dark: '#003737'
			},
			secondary: {
				light: '#ffecc0',
				main: '#FFBE2C',
				dark: '#ff9910',
				contrastText: '#272727'
			},
			background: {
				paper: '#FFFFFF',
				default: '#F0F7F7'
			},
			error: red
		},
		status: {
			danger: 'green'
		}
	}

	function handleSchemeSelect(themeId) {
		const newSettings = {
			...settings,
			theme: {
				main: themeId,
				navbar: themeId,
				toolbar: themeId,
				footer: themeId
			},
            customizeTheme
		};
		dispatch(setNewSettings(newSettings));
	}

	useEffect(() => {
		if(Object.keys(newUser).length == undefined){
		}
		else if(Object.keys(newUser).length >= 1){
			customizeTheme = newUser.data[0].organization_data.color_schemes
			handleSchemeSelect("TenantTheme")
		}
	},[newUser])

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx(classes.root, 'flex relative z-10 shadow-md')}
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.paper }}
			>
				<Toolbar className="p-0 min-h-48 md:min-h-64">
					{config.navbar.display && config.navbar.position === 'left' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
						</Hidden>
					)}

					<div className="flex justify-center flex-1 font-bold">
						<Typography component="span" className="font-bold text-lg capitalize flex" color="textPrimary">
							{organization.organization_name}
						</Typography>
					</div>

					<div className="flex items-center px-8">
						<LanguageSwitcher />

						<FullScreenToggle />

						<FuseSearch />

						<Hidden lgUp>
							<ChatPanelToggleButton />
						</Hidden>

						<QuickPanelToggleButton />

						<UserMenu />
					</div>

					{config.navbar.display && config.navbar.position === 'right' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton />
						</Hidden>
					)}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayout1);
