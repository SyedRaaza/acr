import React, { useEffect , useState , Suspense} from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector , connect } from 'react-redux';
import FuseLoading from '@fuse/core/FuseLoading';
import _ from '@lodash';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import NewWidget10 from "./widgets/newWidget10";
import {getDashboardCisData , getUpdatedDashboardCisData} from '../../../../store/redux/index';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import Widget10 from '../project/widgets/Widget10';
import DoughnutWidget from "./widgets/newDoughnutWidget"
import { dashboardCisFailure } from '../../../../store/redux/dashboardCis/dashboardCisActions';
import { useTheme } from '@material-ui/core';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import "../../../.././../styles/noAssessmentsPage.scss";
import {updateUser} from '../../../../store/redux/index';



const NoAssessment = () => {
	return (
		<div className="noAssessmentsPage">
			<Icon className="text-9xl" color='primary'>
				style
			</Icon>
			<FuseAnimate animation="transition.slideRightIn" delay={600}>
			<Typography className="px-16 pb-8 sm:text-20 md:text-2xl lg:text-2xl font-800 font-extrabold">
				No Assessments available. Please Add an Assesment.
			</Typography>
			</FuseAnimate>
			<FuseAnimate animation="transition.slideLeftIn" delay={600}>
			<Button
				type="button"
				variant="contained"
				color="primary"
				className="w-2/4 mx-auto mt-16"
				aria-label="ADD ASSESSMENT"
				value="legacy"
				component={Link}
				to="/apps/e-commerce/products"
				role="button"
			>
				<span className="hidden sm:flex">Add New Assesment</span>
				<span className="flex sm:hidden">New</span>
			</Button>
			</FuseAnimate>
		</div>
	)
};

function AnalyticsDashboardApp({DashboardData}) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgetsEntities);
	const [assessmentList , setAssessmentList] = useState();
	const [loading , setLoading] = useState(true);
	const [select , setSelect] = useState();
	const WidgetOneDashboardData = useSelector(state => state.cisDashboardDataReducer)


	useEffect(() => {
		dispatch(getWidgets());
		dispatch(getDashboardCisData());
	}, [dispatch]);

	useEffect(() => {
		if(DashboardData.loading == true) {
			setLoading(true)
		}
		else if (DashboardData.loading == false) {
			setLoading(false)
			setAssessmentList(DashboardData.assessment_list)
		}
	},[DashboardData.loading , DashboardData.cisDashboard])


	if (_.isEmpty(widgets)) {
		return null;
	}

	if (loading) {
		return <FuseLoading />;
	}
	const handleChangeSelect = (event) => {
		setSelect(event.target.value)
		dispatch(getUpdatedDashboardCisData({"assessment_id":event.target.value}))
	};

	const changeUserName = () => {
		dispatch(updateUser("Usman"))
	}

	return (
		DashboardData.assessment_list.length == 0 ? <NoAssessment /> :
		<div className="w-full">
			<Widget1 data={widgets.widget1} DashboardData={WidgetOneDashboardData} />
			<button onClick={changeUserName}>Chnage Name</button>
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">
						<FuseAnimate delay={600}>
						<div className="controlContent--types__policy mt-20 mb-20">
						<FormControl variant="outlined" >
						<InputLabel htmlFor="outlined-age-native-simple">Current Assessment</InputLabel>
							<Select
							native
							//value={select.pd_status}
							onChange={handleChangeSelect}
							label="Current Assessment"
							inputProps={{
								name: 'pd_status',
								id: 'policy-controlled',
							}}
							>
							{assessmentList.map((val , key) => (
								<option onClick={() => {console.log(val.name + "From Click")}} key={key} className="selectOptions" value={val.id}>{val.name}</option>
							))}
							
							</Select>
						</FormControl>
						</div>
						</FuseAnimate>

						<div className="flex flex-col sm:flex sm:flex-row pb-32">
						<Widget2 data={widgets.widget2} />
							{/* <div className="widget flex w-full sm:w-1/3 p-16">
								
							</div> */}

							{/* <div className="widget flex w-full sm:w-1/3 p-16">
								<Widget3 data={widgets.widget3} />
							</div>

							<div className="widget w-full sm:w-1/3 p-16">
								<Widget4 data={widgets.widget4} />
							</div> */}
						</div>

						{/* <FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-300">
								How many pages your users visit?
							</Typography>
						</FuseAnimate> */}

						{/* <div className="widget w-full p-16 pb-32">
							<Widget5 data={widgets.widget5} />
						</div> */}

						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-300">Where are your users?</Typography>
						</FuseAnimate>

						<div className="widget w-full pt-16 pb-32">
							<NewWidget10 />
						</div>
					</div>

					<div className="flex flex-wrap w-full md:w-320 pt-16">
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							{/* <FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300">
									Implementation Groups 
								</Typography>
							</FuseAnimate> */}

							<div className="widget w-full p-16">
								<Widget7 data={widgets.widget7} />
							</div>
						</div>

						<div className="mb-32 w-full sm:w-1/2 md:w-full">

							<div className="widget flex w-full p-12">
								<DoughnutWidget />
							</div>
						</div>

						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
									What is happening?
								</Typography>
							</FuseAnimate>
							<div className="widget w-full p-16">
								<Widget9 data={widgets.widget9} />
							</div>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		DashboardData: state.cisDashboardDataReducer
	}
}

export default connect(mapStateToProps) (withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp));
