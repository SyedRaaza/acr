import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState , useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { connect, useSelector , useDispatch } from 'react-redux';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import FuseLoading from '@fuse/core/FuseLoading';
import { setNewSettings } from 'app/store/fuse/settingsSlice';
import { lightBlue, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
	}
}));

function Widget1(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const dispatch = useDispatch();
	const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
	const [loading , setLoading] = useState(true)
	const [controImplementationData , setControlImplementationData] = useState({})
	const [controImplementationLabel , setControlImplementationLabel] = useState({})
	const [dataset, setDataset] = useState('2017');
	const data = _.merge({}, props.data);
	const settings = useSelector(({ fuse }) => fuse.settings.current);
	const userTheme = useSelector(state => state.newUserReducer.user)

	const {DashboardData} = props;

	_.setWith(data, 'options.plugins.xLabelsOnTop.fontColor', fade(theme.palette.primary.contrastText, 0.7));
	_.setWith(data, 'options.plugins.xLabelsOnTop.borderColor', fade(theme.palette.primary.contrastText, 0.6));
	_.setWith(data, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.primary.contrastText);

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

		if(DashboardData.loading == true) {
			setLoading(true)
		}
		else if (DashboardData.loading == false) {
			var objectCheck = {}
			if (DashboardData.cisDashboard.data.data == null ) {
				objectCheck = DashboardData.cisDashboard.data.dashboard_data
			}
			else {
				objectCheck = DashboardData.cisDashboard.data.data.dashboard_data
			}
			if (Object.keys(objectCheck).length > 0) {
				setLoading(false)
				var newData = {
					control:[ {
						data: objectCheck.implementation_by_controls.data,
						lable: "Controls Implementation Percentage",
						fill: "start"
					}]
				}
				setControlImplementationData(newData)
				setControlImplementationLabel(objectCheck.implementation_by_controls.labels)
				
			}
			else {
				setLoading(false)
				var newData = {
					control:[ {
						data: [],
						lable: "Controls Implementation Percentage",
						fill: "start"
					}]
				}
				setControlImplementationData(newData)
				setControlImplementationLabel([])
			}
		}
		customizeTheme = userTheme.data[0].organization_data.color_schemes
		handleSchemeSelect("TenantTheme")
		
	},[DashboardData.loading , DashboardData.cisDashboard , userTheme])

	if (loading) {
		return <FuseLoading />;
	}

	return (
		loading ? <FuseLoading /> :
		<ThemeProvider theme={contrastTheme}>
			<div className={clsx(classes.root)}>
				<div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">
					<FuseAnimate delay={100}>
						<div className="flex-col">
							<Typography className="h2" color="textPrimary">
								Implementation Percentage
							</Typography>
							<Typography className="h5" color="textSecondary">
								by controls.
							</Typography>
						</div>
					</FuseAnimate>

					{/* <div className="flex flex-row items-left">
						{Object.keys(data.datasets).map(key => (
							<Button
								key={key}
								className="py-8 px-12"
								size="small"
								onClick={() => setDataset(key)}
								disabled={key === dataset}
							>
								{key}
							</Button>
						))}
					</div> */}
				</div>
				<div className="container relative h-200 sm:h-256 pb-16">
					<Bar
						data={{
							labels: controImplementationLabel,
							datasets: controImplementationData["control"].map(obj => ({
								...obj,
								borderColor: theme.palette.secondary.main,
								backgroundColor: theme.palette.secondary.main,
								pointBackgroundColor: theme.palette.secondary.dark,
								pointHoverBackgroundColor: theme.palette.secondary.main,
								pointBorderColor: theme.palette.secondary.contrastText,
								pointHoverBorderColor: theme.palette.secondary.contrastText
							}))
						}}
						options={{
							"spanGaps":false,
							"legend":{"display":false},
							"maintainAspectRatio":false,
							"tooltips":{"mode":"label" , "intersect":false},
							"layout":{"padding":{"top":32,"left":32,"right":32}},
							"elements":{"point":{"radius":4,"borderWidth":2,"hoverRadius":4,"hoverBorderWidth":2},
							"line":{"tension":0}},
							"scales":{
								"xAxes":[{
									"gridLines":{"display":false,"drawBorder":false,"tickMarkLength":18},
									"ticks":{"fontColor":"#fff" , "fontSize": 8},
								}],
								"yAxes":[{"display":false,"ticks":{"min":0,"max":100,"stepSize":10}}]
							},
							"plugins":{"filler":{"propagate":false},
							"xLabelsOnTop":{"active":true, "fontColor":"rgba(255, 255, 255, 0.7)","borderColor":"rgba(255, 255, 255, 0.6)"}}}}
					/>
				</div>
			</div>
		</ThemeProvider>
	);
}

const mapStateToProps = state => {
	return {
		DashboardData: state.cisDashboardDataReducer
	}
}
export default connect(mapStateToProps)(React.memo(Widget1));
