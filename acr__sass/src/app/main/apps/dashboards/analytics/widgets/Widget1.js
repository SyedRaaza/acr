import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState , useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector , useDispatch } from 'react-redux';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import FuseLoading from '@fuse/core/FuseLoading';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
	}
}));

function Widget1(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const theme = useTheme();
	const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
	const [loading , setLoading] = useState(true)
	const [controImplementationData , setControlImplementationData] = useState({})
	const [controImplementationLabel , setControlImplementationLabel] = useState({})
	const data = _.merge({}, props.data);
	const {DashboardData} = props;

	_.setWith(data, 'options.plugins.xLabelsOnTop.fontColor', fade(theme.palette.primary.contrastText, 0.7));
	_.setWith(data, 'options.plugins.xLabelsOnTop.borderColor', fade(theme.palette.primary.contrastText, 0.6));
	_.setWith(data, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.primary.contrastText);

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
		
	},[DashboardData.loading , DashboardData.cisDashboard ])

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
						// onElementsClick={elem => {
						// 	let bar_index = elem[0]._index;
						// 	console.log(elem);
						// 	console.log(elem[0]._index)
						// 	console.log(elem[0]._model.label)
						// 	console.log(elem[0]._chart.config.data.datasets[0].data[bar_index])
						//   }}
						options={{
							"indexAxis": 'x',
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
									"stacked":true,
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

export default React.memo(Widget1);
