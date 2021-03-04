import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState , useEffect } from 'react';
import { Doughnut , Polar , Radar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import FuseLoading from '@fuse/core/FuseLoading';


function Widget7(props) {
	const theme = useTheme();
	const [dataset, setDataset] = useState('Today');
	const data = _.merge({}, props.data);
	const [loading , setLoading] = useState(true)
	const [controImplementationData , setControlImplementationData] = useState({})
	const [groupImplementationData , setGroupImplementationData] = useState({})
	const [controlImplementationLabels , setControlImplementationLabels] = useState({})
	const {DashboardData} = props;

	useEffect(() => {
		//alert(JSON.stringify(data.options) + "From widget 7")
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
			if(Object.keys(objectCheck).length > 0) {
			var newData = {
				control:[ {
					data: objectCheck.implementation_by_controls.data,
					lable: "Controls Implementation Percentage",
					fill: "start"
				}]
			}
			setControlImplementationData(newData)
			setGroupImplementationData(objectCheck.group_implementation)
			setControlImplementationLabels(objectCheck.implementation_by_controls.labels)
			setLoading(false)
			}
			else {
				var newData = {
					control:[ {
						data: [],
						lable: "Controls Implementation Percentage",
						fill: "start"
					}]
				}
				setControlImplementationData(newData)
				setGroupImplementationData({"data":[] , "labels":[] })
				setControlImplementationLabels([])
				setLoading(false)
			}
	}
	},[DashboardData.loading , DashboardData.cisDashboard , groupImplementationData])

	if (loading) {
		return <FuseLoading />;
	}

	return (
		<Card className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography className="text-16">Control Scores</Typography>
			</div>

			<div className="h-400 w-full p-10">
				<Radar
					data={{
						labels: ["CIS #01",
						"CIS #02",
						"CIS #03",
						"CIS #04",
						"CIS #05",
						"CIS #06",
						"CIS #07",
						"CIS #08",
						"CIS #09",
						"CIS #10",
						"CIS #11",
						"CIS #12",
						"CIS #13",
						"CIS #14",
						"CIS #15",
						"CIS #16",
						"CIS #17",
						"CIS #18",
						"CIS #19",
						"CIS #20"],
						datasets: controImplementationData["control"].map(obj => ({
							...obj,
							borderColor: theme.palette.divider,
							fill: origin,
							backgroundColor: 
								// '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'
								// theme.palette.secondary.dark,
								// theme.palette.secondary.main,
								theme.palette.secondary.light
							,
							// hoverBackgroundColor: [
							// 	theme.palette.secondary.dark,
							// 	theme.palette.secondary.main,
							// 	theme.palette.secondary.light
							// ]
						}))
					}}
					options={{"cutoutPercentage":75,"spanGaps":false,"legend":{"display":false},"maintainAspectRatio":false}}
				/>
			</div>

			{/* <div className="p-16 flex flex-row items-center justify-center">
				{groupImplementationData.data.map((label, index) => (
					<div key={label} className="px-16 flex flex-col items-center">
							<Typography className="h6" color="textSecondary">
								{groupImplementationData.labels[index]}
							</Typography>
						<Typography className="h6 font-200 py-8">{label}%</Typography>
					</div>
				))}
			</div> */}

			{/* <Divider className="mx-16" />

			<div className="p-16 flex flex-row items-center justify-between">
				<div>
					<FormControl className="">
						<Select value={dataset} onChange={ev => setDataset(ev.target.value)}>
							{Object.keys(data.datasets).map(key => (
								<MenuItem key={key} value={key}>
									{key}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<Button size="small">OVERVIEW</Button>
			</div> */}
		</Card>
	);
}

const mapStateToProps = state => {
	return {
		DashboardData: state.cisDashboardDataReducer
	}
}

export default connect(mapStateToProps)(React.memo(Widget7));
