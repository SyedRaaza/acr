import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';

const ISOMandatoryClauseDoughnut = ({chartData , chartTitle , cutOutPercentage}) => {

	const dataForDoughnut = {
        labels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
                backgroundColor: ['#FF6384', '#36A2EB' , '#9f3112' ,'#FFCE56' , '#f7b7a3' , '#9b3192' , '#f26b19' , '#00afbb'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
        ],
     };
	
    return (
        <Paper className="w-full rounded-8 shadow overflow-x-hidden">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography className="text-16">{chartTitle}</Typography>
			</div>
			<div className="h-400 w-full p-20">
				<Doughnut
					data={dataForDoughnut}
                    options={{"cutoutPercentage":cutOutPercentage ,"spanGaps":false, "animation": {"animateRotate" : true} ,"legend":{"display":true,"position":"bottom","labels":{"padding":16,"usePointStyle":true}},"maintainAspectRatio":false}}
                />
			</div>
		</Paper>
    );
}

export default ISOMandatoryClauseDoughnut;