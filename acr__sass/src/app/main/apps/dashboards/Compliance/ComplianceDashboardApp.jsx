import React , {useState} from 'react';
import NistRadar from '../project/widgets/nistRadarChart';
import NistIPDRR from '../project/widgets/nistIPDRR';
import FuseLoading from '@fuse/core/FuseLoading';
import {useSelector , useDispatch} from 'react-redux';
import FuseAnimate from '@fuse/core/FuseAnimate';
import {Typography , FormControl , InputLabel , Select} from '@material-ui/core';

function ComplianceDashboardApp(props) {

    const dispatch = useDispatch();
    const [loading , setLoading] = useState(false);
    const [select , setSelect] = useState();

    const handleChangeSelect = (event) => {
		setSelect(event.target.value)
		//dispatch(updateISODashboardData({"assessment_id":event.target.value}))
	};

    // useEffect(() => {
	// 	if(DashboardData.loading == true) {
	// 		setLoading(true)
	// 	}
	// 	else if (DashboardData.loading == false) {
	// 		setLoading(false)
    //         setAssessmentList(DashboardData.assessment_list)
    //         setTableProps(DashboardData.isoDashboardData.table_data)
	// 	}
	// },[DashboardData.loading , DashboardData.isoDashboardData])

    if (loading) {
		return <FuseLoading />;
	}
    return (
        // DashboardData.assessment_list.length == 0 ? <NoAssessment /> :
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
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
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
                        <div className="widget w-full p-16 pb-32">
                            <NistRadar />
                        </div>
                        <div className="widget w-full p-16 pb-32">
                            <NistIPDRR />
                        </div>
						{/* <FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-300">Where are your users?</Typography>
						</FuseAnimate>
						<div className="widget w-full p-16 pb-32">
                            <ISOControlsTable tableData={tableProps} />
						</div> */}
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
						{/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget flex w-full">
                                <ISOMandatoryClauseDoughnut chartData={DashboardData.isoDashboardData.chart_requirements} chartTitle={"ISO-27k Mandatory Clause"} cutOutPercentage={0} />
							</div>
						</div>
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget flex w-full">
                                <ISOMandatoryClauseDoughnut chartData={DashboardData.isoDashboardData.chart_controls} chartTitle={"ISO-27k Controls"} cutOutPercentage={60} />
							</div>
						</div> */}
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

export default ComplianceDashboardApp;