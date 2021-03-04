import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import FuseLoading from '@fuse/core/FuseLoading';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store';
import { resetOrder, getOrder } from '../store/orderSlice';
import AssessmentsAccordion from "./assessmentsAccordian";
import {connect} from 'react-redux';
import {getCisData} from '../../../../store/redux/index';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import ReactTagInput from "@pathofdev/react-tag-input";
import _ from '@lodash';
import Divider from '@material-ui/core/Divider';
import "../../../../../styles/assessmentInfoForm_Assessments.scss";


function Marker(props) {
	return (
		<Tooltip title={props.text} placement="top">
			<Icon className="text-red">place</Icon>
		</Tooltip>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	},
	heading: {
	  fontSize: theme.typography.pxToRem(15),
	  flexBasis: '33.33%',
	  flexShrink: 0,
	},
	secondaryHeading: {
	  fontSize: theme.typography.pxToRem(15),
	  color: theme.palette.text.secondary,
	},
  }));

const ButtonNext = ({changeTab , nextTab , btnText="NEXT"}) => {
	return (
		<div className="buttonNext">
			<Button
				to=""
				className="whitespace-nowrap"
				variant="contained"
				color="secondary"
				onClick={() => changeTab(undefined , nextTab)}
			>
				<span className="sm:flex">{btnText}</span>
			</Button>
		</div>
	)
};


const Order = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
	const theme = useTheme();
	const routeParams = useParams();
	const [tabValue, setTabValue] = useState(0);
	const [noOrder, setNoOrder] = useState(false);
	const [map, setMap] = useState('shipping');
	const [expanded, setExpanded] = useState(false);
	const [tabsData , setTabsData] = useState(true);
	const [disable , setDisable] = useState(false);
    const [tags, setTags] = useState([])

    var propsData = props.showAssessmentData;
	const {getCis , cisData , showAssessmentData} = props;
	var cisMainData = props.cisData.cis.data ;
	var currentAssessmentData = showAssessmentData.showAssessMentData.controls ;
    const [assessmentFormData , setAssessmentFormData] = useState();
    

    useEffect(() => {
        if(currentAssessmentData == null || Object.keys(currentAssessmentData).length == 0 ) {
            cisMainData = [0 , 1 , 2 ,3 , 4]
            currentAssessmentData = [0 , 1 , 2 ,3 , 4]
           // alert( "Current Data if" + JSON.stringify(showAssessmentData))
        }
        else if (currentAssessmentData != null || Object.keys(currentAssessmentData).length > 0) {
            currentAssessmentData = showAssessmentData.showAssessMentData.controls;
            setAssessmentFormData(showAssessmentData.showAssessMentData)
            //alert("Current Data" + JSON.stringify(showAssessmentData.showAssessMentData.controls))
        }
    },[props])

	const changeTabDataState = newState => {
		setTabsData(newState)
	}

	const handleEnableTabs = newState => {
		setDisable(newState)
	}

	useEffect(() => {

	},[tabsData])

	useDeepCompareEffect(() => {
		dispatch(getOrder(routeParams)).then(action => {
			if (!action.payload) {
				setNoOrder(true);
			}
		});
	}, [dispatch, routeParams]);

	useEffect(() => {
		return () => {
			dispatch(resetOrder());
			setNoOrder(false);
		};
	}, [dispatch]);

	useEffect(() => {
		getCis()
	},[])


	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};



	function handleChangeTab(event,value) {
		console.log(value)
		setTabValue(value);
	}

    const handleChangeTag = newTag => {
        setTags(newTag)
    }


////////////////Convert Array to Chunks


	const arr = Object.values(cisData.cis)
	console.log(arr)
	console.log(cisData)

	function chunk(arr, chunkSize) {
	if (chunkSize <= 0) throw "Invalid chunk size";
	var R = [];
	for (var i=0,len=arr.length; i<len; i+=chunkSize)
		R.push(arr.slice(i,i+chunkSize));
	return R;
	}

	const chunksOfArray = chunk(currentAssessmentData , 5);
	const controlOneToFive = chunksOfArray[0];
	const controlSixToTen = chunksOfArray[1]
	const controlElevenToFifteen = chunksOfArray[2]
	const controlSixteenToTwenty  = chunksOfArray[3]

	if (!noOrder) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-col flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There is no such Assesment!
					</Typography>
					<Button
						className="mt-24"
						component={Link}
						variant="outlined"
						to="/apps/e-commerce/orders"
						color="inherit"
					>
						Go to Assesment Page
					</Button>
				</div>
			</FuseAnimate>
		);
	}

    if (currentAssessmentData == null || Object.keys(currentAssessmentData).length == 0 ) {
		return <FuseLoading />;
	}
    

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
					<div className="flex flex-1 w-full items-center justify-between">
						<div className="flex flex-1 flex-col items-center sm:items-start">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Typography
									className="flex items-center sm:mb-12"
									component={Link}
									role="button"
									to="/apps/maturity/cis"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">CIS Maturity</span>
								</Typography>
							</FuseAnimate>
						</div>
					</div>
			}
			content={
				
					<div className="p-16 sm:p-24 max-w-2xl w-full">
                        <div className="w-full">
                            <form className="w-full" Validate autoComplete="off"> 
                            <div className="w-full flex items-center justify-between"> 
                                <TextField
                                    id="name-input"
                                    label="Name"
                                    type="text"
                                    autoComplete=""
                                    variant="outlined"
                                    name="name"
                                    value={assessmentFormData.name}
                                    //onChange={handleChangeInput}
                                    disabled
                                    style={{marginRight: "1rem"}}
                                />
                                <TextField
                                    id="owner-input"
                                    label="Owner"
                                    type="text"
                                    autoComplete=""
                                    variant="outlined"
                                    name="owner"
                                    value={`${assessmentFormData.first_name} ${assessmentFormData.last_name}`}
                                    //onChange={handleChangeInput}
                                    disabled
                                />
                            </div>   
                                <div className="w-full flex items-center justify-between">
                                <TextField
                                    id="period-input"
                                    label="From"
                                    type="date"
                                    autoComplete=""
                                    variant="outlined"
                                    name="period_from"
                                    value={assessmentFormData.period_from}
                                    //onChange={handleChangeInput}
                                    disabled
                                    style={{marginRight: "1rem"}}
                                />
                                <TextField
                                    id="period-input"
                                    label="To"
                                    type="date"
                                    autoComplete=""
                                    variant="outlined"
                                    name="period_to"
                                    value={assessmentFormData.period_to}
                                    //onChange={handleChangeInput}
                                    className="-mr-2"
                                    style={{marginRight: "-8px !important"}}
                                    disabled
                                    className="ml-10"
                                />
                                </div>
                                <div className="assessmentTagInput">
                                <ReactTagInput 
                                tags={assessmentFormData.departments}
                                placeholder="Enter Department Name and Press Enter"
                                editable="true"
                                removeOnBackspace="true"
                                onChange={handleChangeTag}
                                readOnly={true}

                                />
                                </div>
                            </form>
                        </div>
                        <Divider style={{margin: "20px 0px 20px 0px"}} />
                        <Tabs
                            value={tabValue}
                            onChange={handleChangeTab}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            classes={{ root: 'w-full h-64' }}
                            style={{border: "1px solid #d3d3d3" ,borderBottom: "0px", borderRadius: "6px" , justifyContent: "center" , marginTop: "10px"}}
                        >
                            <Tab className="h-64" label="CSC 1-5" disabled={disable} onClick={() => {changeTabDataState(true)}} />
                            <Tab className="h-64" label="CSC 6-10" disabled={disable} />
                            <Tab className="h-64" label="CSC 11-15" disabled={disable} />
                            <Tab className="h-64" label="CSC 16-20" disabled={disable} />
                        </Tabs>
						{/* Assesment Info */}
						{/* SCS 1-5 */}
						{tabValue === 0 && (
							tabsData ?
							<React.Fragment>
								{controlOneToFive.map((val , key) => (
                                    // 	theme.palette.secondary.dark,
							// 	theme.palette.secondary.main,
							// 	theme.palette.secondary.light
                           // `linear-gradient(to right,${theme.palette.primary.dark}, ${theme.palette.primary.light})`
								<Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} expanded={expanded === key} onChange={handleChange(key)}>
									<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
									>
										<div className="accordianSummary">
											<Typography noWrap >{val.display_id}</Typography>
											<div className="text-left w-2/4">
                                            <Typography noWrap className="text-left" >{val.details}</Typography>
                                            </div>
											<Typography className="" noWrap ></Typography>
										</div>
									</AccordionSummary>
									<AccordionDetails>
									<AssessmentsAccordion cisData={val} />
									</AccordionDetails>
								</Accordion>
								))}
								<ButtonNext changeTab={handleChangeTab} nextTab={1} />
							</React.Fragment>
							:
							<React.Fragment>

							</React.Fragment>
						)}
						{tabValue === 1 && (
							tabsData ?
						<React.Fragment>
							{controlSixToTen.map((val , key) => (
							<Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} expanded={expanded === key} onChange={handleChange(key)}>
								<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
								>
									<div className="accordianSummary">
                                        <Typography noWrap >{val.display_id}</Typography>
                                        <div className="text-left w-2/4">
                                        <Typography noWrap className="text-left" >{val.details}</Typography>
                                        </div>
                                        <Typography className="" noWrap ></Typography>
									</div>
								</AccordionSummary>
								<AccordionDetails>
								<AssessmentsAccordion cisData={val} />
								</AccordionDetails>
							</Accordion>
							))}
							<ButtonNext changeTab={handleChangeTab} nextTab={2} />
						</React.Fragment>
						:
						<React.Fragment>

						</React.Fragment>	
						)}
						{tabValue === 2 && (
                            tabsData ?
                            <React.Fragment>
                                {/* <AccordianComponent cisData={cisData.cis.control1} /> */}
                                {controlElevenToFifteen.map((val , key) => (
                                <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val + "1 to 5")}} expanded={expanded === key} onChange={handleChange(key)}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                        <div className="accordianSummary">
                                            <Typography noWrap >{val.display_id}</Typography>
                                            <div className="text-left w-2/4">
                                            <Typography noWrap className="text-left" >{val.details}</Typography>
                                            </div>
                                            <Typography className="" noWrap ></Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <AssessmentsAccordion cisData={val} />
                                    </AccordionDetails>
                                </Accordion>
                                ))}
                                <ButtonNext changeTab={handleChangeTab} nextTab={1} />
                            </React.Fragment>
                            :
                            <React.Fragment>

                            </React.Fragment>
						)}
						{tabValue === 3 && (
                            tabsData ?
                            <React.Fragment>
                                {controlSixteenToTwenty.map((val , key) => (
                                <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val + "1 to 5")}} expanded={expanded === key} onChange={handleChange(key)}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                        <div className="accordianSummary">
                                            <Typography noWrap >{val.display_id}</Typography>
                                            <div className="text-left w-2/4">
                                            <Typography noWrap className="text-left" >{val.details}</Typography>
                                            </div>
                                            <Typography className="" noWrap ></Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <AssessmentsAccordion cisData={val} />
                                    </AccordionDetails>
                                </Accordion>
                                ))}
                                <ButtonNext changeTab={handleChangeTab} nextTab={1} />
                            </React.Fragment>
                            :
                            <React.Fragment>

                            </React.Fragment>
						)}
					</div>
			}
			innerScroll
		/>
	);
}

const mapStateToProps = state => {
	return {
		cisData: state.cisReducer,
        showAssessmentData: state.showAssessmentDataReducer,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getCis: () => dispatch(getCisData())
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(withReducer('eCommerceApp', reducer)(Order));