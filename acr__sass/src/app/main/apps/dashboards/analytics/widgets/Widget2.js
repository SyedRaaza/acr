import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React , {useState , useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import _ from '@lodash';
import { connect } from 'react-redux';
import FuseLoading from '@fuse/core/FuseLoading';

function Widget2(props) {
	const theme = useTheme();
	const data = _.merge({}, props.data);
	const [loading , setLoading] = useState(true)
	const [maturityLevelBarData , setMaturityLevelBarData] = useState({})
	const [maturityLevelData , setMaturityLevelData] = useState({})
	const {DashboardData} = props;

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
			var newData = {
				data:[ {
					data:objectCheck.maturity_levels.data,
					lable: "Maturity Level",
					//fill: "start"
				}]
			}
			var options = data.options;
			setMaturityLevelBarData(newData)
			setMaturityLevelData(objectCheck.maturity_levels)
			setLoading(false)
			
			}
			else {
				var newData = {
					data:[ {
						data:[],
						lable: "Maturity Level",
						//fill: "start"
					}]
				}
				var options = data.options;
				setMaturityLevelBarData(newData)
				setMaturityLevelData({"data" : [] , "labels": [] , "maturity_ratings" : 0})
				setLoading(false)
			}
	}
	},[DashboardData.loading , DashboardData.cisDashboard])

	if (loading) {
		return <FuseLoading />;
	}

	return (
		<Card className="w-full rounded-8 shadow">
			<div className="p-16 pb-0 flex flex-row flex-wrap items-end">
				<div className="">
					<Typography className="h3" color="textSecondary">
						Maturity Levels and Ratings
					</Typography>
					<Typography className="text-56 font-300 leading-none mt-8">{maturityLevelData.maturity_ratings}</Typography>
				</div>

				<div className="py-4 text-16 flex flex-row items-center">
					<div className="flex flex-row items-center">
						{maturityLevelData.maturity_ratings > 3 && <Icon className="text-yellow">trending_up</Icon>}
						{maturityLevelData.maturity_ratings < 3 && <Icon className="text-red">trending_down</Icon>}
					</div>
					<Typography className="whitespace-nowrap">Out of 5</Typography>
				</div>
			</div>

			<div className="h-200 w-100-p">
				<Bar
					data={{
						labels: maturityLevelData.labels,
						datasets: maturityLevelBarData.data.map(obj => ({
							...obj,
							borderColor: theme.palette.secondary.main,
							backgroundColor: theme.palette.secondary.main
						}))
					}}
					options={{"spanGaps":false,"legend":{"display":false},"maintainAspectRatio":false,"layout":{"padding":{"top":24,"left":16,"right":16,"bottom":16}},"scales":{"xAxes":[{"display":true,"stacked": true}],"yAxes":[{"display":true,"stacked": true,"gridLines":{"display": false},"ticks":{"min":0,"max":5 , "stepSize": 0}}]}}}
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

export default connect(mapStateToProps)(React.memo(Widget2));
