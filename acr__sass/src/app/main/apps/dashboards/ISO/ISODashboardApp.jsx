import React , {useState , useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import FuseAnimate from '@fuse/core/FuseAnimate';
import {Typography , FormControl , InputLabel , Select} from '@material-ui/core';
import FuseLoading from '@fuse/core/FuseLoading';
import ISOMandatoryClauseDoughnut from './widgets/ISOMandatoryClauseDoughnut';
import {NoAssessment} from '../analytics/AnalyticsDashboardApp';
import ISOControlsTable from './widgets/ISOControlsTable';
import {getISODashboardData , updateISODashboardData} from '../../../../store/redux/index';
import axios from 'axios';

function ISODashboardApp(props) {
    const dispatch = useDispatch();
    const [isoChartsData , setIsoChartsData] = useState();
    const [loading , setLoading] = useState(true);
	const DashboardData = useSelector(state => state.isoDashboardReducer);
    const [assessmentList , setAssessmentList] = useState(DashboardData.assessment_list);
    const [tableProps , setTableProps] = useState(DashboardData.isoDashboardData.table_data)
    const [select , setSelect] = useState();
	const WidgetOneDashboardData = useSelector(state => state.cisDashboardDataReducer);
    const DoughnutWidgetData = useSelector(state => state.cisDashboardDataReducer.cisDashboard);

    useEffect(() => {
        dispatch(getISODashboardData());
    },[]);

    

	useEffect(() => {
		if(DashboardData.loading == true) {
			setLoading(true)
		}
		else if (DashboardData.loading == false) {
			setLoading(false)
            setAssessmentList(DashboardData.assessment_list)
            setTableProps(DashboardData.isoDashboardData.table_data)
		}
	},[DashboardData.loading , DashboardData.isoDashboardData])

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

      const dataForMandatoryClause = {
        labels: ['Unknown' , 'Non-existent', 'Initial' , 'Limited' , 'Defined' , 'Managed' , 'Optimized' , 'Not Applicable'],
        datasets: [
            {
                data: [74 , 7 , 4 , 4 , 7 , 0 , 0 , 4],
                backgroundColor: ['#FF6384', '#36A2EB' , '#9f3112' ,'#FFCE56' , '#f7b7a3' , '#9b3192' , '#f26b19' , '#00afbb'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
        ],
     };
      
     const dataForISOControls = {
        labels: ['Unknown' , 'Non-existent', 'Initial' , 'Limited' , 'Defined' , 'Managed' , 'Optimized' , 'Not Applicable'],
        datasets: [
            {
                data: [93 , 1 , 1 , 1 , 1 , 2 , 2 , 0],
                backgroundColor: ['#f55246', '#950740' , '#66FCF1' ,'#FFCE56' , '#8C9B95' , '#45A29E' , '#f26b19' , '#4E4E60'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
        ],
     };

     const handleChangeSelect = (event) => {
		setSelect(event.target.value)
		dispatch(updateISODashboardData({"assessment_id":event.target.value}))
	};

    if (loading) {
		return <FuseLoading />;
	}
      
    return (
        <div className="w-full">
            {/* <Widget1 DashboardData={WidgetOneDashboardData} /> */}
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
                                    onChange={(e) => {e.preventDefault() ; handleChangeSelect(e)}}
                                    label="Current Assessment"
                                    inputProps={{
                                        name: 'pd_status',
                                        id: 'policy-controlled',
                                    }}
                                    >
                                    {assessmentList.map((val , key) => (
                                        <option onClick={(e) => e.preventDefault()} key={key} className="selectOptions" value={val.id}>{val.name}</option>
                                    ))}
                                    </Select>
                                </FormControl>
                            </div>
						</FuseAnimate>

						{/* <div className="flex flex-col sm:flex sm:flex-row pb-32 mt-16">
                            <ISOMandatoryClauseDoughnut />
						</div> */}

						{/* <div className="flex flex-col sm:flex sm:flex-row pb-32 mt-16">
                            <Widget2  DashboardData={WidgetOneDashboardData} />
						</div> */}

						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-300">Where are your users?</Typography>
						</FuseAnimate>

						<div className="widget w-full p-16 pb-32">
                            <ISOControlsTable tableData={tableProps} />
						</div>
					</div>
                    {/* Right Side */}
					<div className="flex flex-wrap w-full md:w-320 pt-16 mx-16">
						{/* <div className="w-full sm:w-1/2 md:w-full">
							<Card className="h-400 p-20">
                            <div className="flex items-center justify-between h-64 border-b-1">
                                <Typography className="text-16">Control Scores</Typography>
                            </div>
                                <Radar data={data} options={{"cutoutPercentage":75,"spanGaps":false,"legend":{"display":false},"maintainAspectRatio":false}}/>
                            </Card>
						</div> */}
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget flex w-full">
                                <ISOMandatoryClauseDoughnut chartData={DashboardData.isoDashboardData.chart_requirements} chartTitle={"ISO Mandatory Clause"} cutOutPercentage={0} />
							</div>
						</div>
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget flex w-full">
                                <ISOMandatoryClauseDoughnut chartData={DashboardData.isoDashboardData.chart_controls} chartTitle={"ISO Controls"} cutOutPercentage={60} />
							</div>
						</div>
						{/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget flex w-full">
                                <DoughnutWidget doughnutData={DoughnutWidgetData} />
							</div>
						</div> */}

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