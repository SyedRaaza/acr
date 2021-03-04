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


function NistRadar(props) {
	const theme = useTheme();
	const [dataset, setDataset] = useState('Today');
	const data = _.merge({}, props.data);
	const [loading , setLoading] = useState(true)
	const [controImplementationData , setControlImplementationData] = useState({})
	const [groupImplementationData , setGroupImplementationData] = useState({})
	const [controlImplementationLabels , setControlImplementationLabels] = useState({})
	const {DashboardData} = props;

	useEffect(() => {
		alert(JSON.stringify(controImplementationData) + "From nistRadarChart")
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
						labels: [
                        "Asset Management (ID.AM)",
						"Business Environment (ID.BE)",
						"Governance (ID.GV)",
						"Risk Assessment (ID.RA)",
						"Risk Management Strategy (ID.RM)",
						"Supply Chain Risk Management (ID.SC)",
						"Identity Management, Authentication and Access Control (PR.AC)",
						"Awareness and Training (PR.AT)",
						"Data Security (PR.DS)",
						"Information Protection Processes and Procedures (PR.IP)",
						"Maintenance (PR.MA)",
						"Protective Technology (PR.PT)",
						"Anomalies and Events (DE.AE)",
						"Security Continuous Monitoring (DE.CM)",
						"Detection Processes (DE.DP)",
						"Response Planning (RS.RP)",
						"Communications (RS.CO)",
						"Analysis (RS.AN)",
						"Mitigation (RS.MI)",
						"Improvements (RS.IM)",
                        "Recovery Planning (RC.RP)",
                        "Improvements (RC.IM)",
                        "Communications (RC.CO)"
                    ],
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
						}))
					}}
					options={{"cutoutPercentage":75,"spanGaps":false,"legend":{"display":false},"maintainAspectRatio":false}}
				/>
			</div>
		</Card>
	);
}

const mapStateToProps = state => {
	return {
		DashboardData: state.cisDashboardDataReducer
	}
}

export default connect(mapStateToProps)(React.memo(NistRadar));
