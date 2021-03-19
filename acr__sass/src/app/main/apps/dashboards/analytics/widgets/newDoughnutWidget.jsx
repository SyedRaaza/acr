import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React , {useState , useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import {connect} from "react-redux";
import { useTheme } from '@material-ui/core/styles';

function DoughnutWidget({doughnutData}) {

    const theme = useTheme();
    const[groupImplementation , setGroupImplementation] = useState({});

    useEffect(() => {

        var objectCheck = {}
			if (doughnutData.data.data == null ) {
				objectCheck = doughnutData.data
			}
			else {
				objectCheck = doughnutData.data.data
			}
			if (Object.keys(objectCheck).length > 0) {
				setGroupImplementation(objectCheck.dashboard_data.group_implementation)
			}
			else {
				setGroupImplementation({"data" : [] , "labels" : []})
			}


    },[doughnutData , groupImplementation.data])

    useEffect(() => {

    } , [groupImplementation])


    if(Object.keys(groupImplementation).length == 0){
        return (
            <FuseLoading />
        )
    }
	return (
		<Paper className="w-full rounded-8 shadow overflow-x-hidden">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography className="text-16">Implementation Group Scores</Typography>
			</div>
			<div className="h-400 w-full p-20">
				<Doughnut
					data={{
						labels: groupImplementation.labels,
						datasets: [{"data":groupImplementation.data,backgroundColor: [
								// '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'
								theme.palette.secondary.dark,
								theme.palette.secondary.main,
								theme.palette.secondary.light,
							],"hoverBackgroundColor":["#F45A4D","#A041B0","#25B6F4","#E9487F","#FFD341"]}]
					}}
					options={{"cutoutPercentage":0,"spanGaps":false, "animation": {"animateRotate" : true} ,"legend":{"display":true,"position":"bottom","labels":{"padding":16,"usePointStyle":true}},"maintainAspectRatio":false}}
				/>
			</div>
            <div className="p-16 flex flex-row items-center justify-center">
				{groupImplementation.data.map((label, index) => (
					<div key={label} className="px-16 flex flex-col items-center">
                            <Typography className="h6" color="textSecondary">
                                {groupImplementation.labels[index]}
                            </Typography>
                        <Typography className="h6 font-200 py-8">{label}%</Typography>
                    </div>
				))}
			</div>
		</Paper>
	);
}

const mapStateToProps = state => {
    return {
        doughnutData: state.cisDashboardDataReducer.cisDashboard
    }
}

export default connect(mapStateToProps)(React.memo(DoughnutWidget));
