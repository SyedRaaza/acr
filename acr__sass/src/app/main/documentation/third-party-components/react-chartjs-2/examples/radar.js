import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';



const RadarChart = ({data}) => {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				{/* <h2>Radar Example</h2> */}
				<Radar data={data} />
			</div>
		);
}

export default RadarChart;
