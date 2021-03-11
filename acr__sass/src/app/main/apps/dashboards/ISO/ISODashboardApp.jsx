import React from 'react';
import {useSelector} from 'react-redux';
import FuseAnimate from '@fuse/core/FuseAnimate';
import {Typography , FormControl , InputLabel , Select} from '@material-ui/core';
import Widget1 from '../analytics/widgets/Widget1';
import Widget2 from '../analytics/widgets/Widget2';
import DoughnutWidget from '../analytics/widgets/newDoughnutWidget';
import NewWidget10 from '../analytics/widgets/newWidget10';
import RadarChart from '../../../documentation/third-party-components/react-chartjs-2/examples/radar';
import {Card} from '@material-ui/core';
import { Radar } from 'react-chartjs-2';

function ISODashboardApp(props) {
	const WidgetOneDashboardData = useSelector(state => state.cisDashboardDataReducer);
    const DoughnutWidgetData = useSelector(state => state.cisDashboardDataReducer.cisDashboard);

    const data = {
        labels: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 96, 27, 100]
          }
        ]
      };
      
    return (
        <div className="w-full">
            <Widget1 DashboardData={WidgetOneDashboardData} />
            <FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
                    {/* Left Side */}
					<div className="flex flex-1 flex-col min-w-0">
                        <FuseAnimate delay={600}>
                            <div className="controlContent--types__policy mt-20 mb-20">
                                <FormControl variant="outlined" >
                                    <InputLabel htmlFor="outlined-age-native-simple">Current Assessment</InputLabel>
                                    <Select
                                    native
                                    //onChange={handleChangeSelect}
                                    label="Current Assessment"
                                    inputProps={{
                                        name: 'pd_status',
                                        id: 'policy-controlled',
                                    }}
                                    >
                                    {/* {assessmentList.map((val , key) => (
                                        <option onClick={() => {console.log(val.name + "From Click")}} key={key} className="selectOptions" value={val.id}>{val.name}</option>
                                    ))} */}
                                        <option>Assessment One</option>
                                        <option>Assessment Two</option>
                                        <option>Assessment Three</option>
                                        <option>Assessment Four</option>
                                    </Select>
                                </FormControl>
                            </div>
						</FuseAnimate>

						<div className="flex flex-col sm:flex sm:flex-row pb-32 mt-16">
                            <Widget2  DashboardData={WidgetOneDashboardData} />
						</div>

						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-300">Where are your users?</Typography>
						</FuseAnimate>

						<div className="widget w-full p-16 pb-32">
                            <NewWidget10 at_ck_data={DoughnutWidgetData} />
						</div>
					</div>
                    {/* Right Side */}
					<div className="flex flex-wrap w-full md:w-320 pt-16 mx-16">
						<div className="w-full sm:w-1/2 md:w-full">
							<Card className="h-400 p-20">
                            <div className="flex items-center justify-between h-64 border-b-1">
                                <Typography className="text-16">Control Scores</Typography>
                            </div>
                                <Radar data={data} options={{"cutoutPercentage":75,"spanGaps":false,"legend":{"display":false},"maintainAspectRatio":false}}/>
                            </Card>
						</div>
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget flex w-full">
                                <DoughnutWidget doughnutData={DoughnutWidgetData} />
							</div>
						</div>

						{/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
                                    <h1>Widget 9</h1>
								</Typography>
							</FuseAnimate>
						</div> */}
					</div>
				</div>
			</FuseAnimate>
        </div>
    );
}

export default ISODashboardApp;