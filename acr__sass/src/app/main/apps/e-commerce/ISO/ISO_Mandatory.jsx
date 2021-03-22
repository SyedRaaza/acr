import React , {useState , useEffect} from 'react';
import {useSelector} from 'react-redux';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTheme } from '@material-ui/core/styles';
import {Button , Tab , Tabs , Typography , Icon , Accordion , AccordionDetails , AccordionSummary, Card} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ISOMandatorySubControls from './IOS_Mandatory_SubControls';
import FuseLoading from '@fuse/core/FuseLoading';

const ButtonNext = ({changeTab , nextTab , btnText="NEXT"}) => {
	return (
		<div className="buttonNext">
			<Button
				to=""
				className="whitespace-nowrap"
				variant="contained"
				color="secondary"
				onClick={() => {changeTab(undefined , nextTab)}}
			>
				<span className="sm:flex">{btnText}</span>
			</Button>
		</div>
	)
};

const ISOMandatory = (props) => {

    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [tabValue, setTabValue] = useState(0);
    const [tabsData , setTabsData] = useState(false);
    const [disable , setDisable] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [ISOMandatoryDataControls , setISOMandatoryDataControls] = useState([]);
    const ISOMandatoryData = useSelector(state => state.isoReducer);
    const ISOMandatoryDataForDisplayAssessment = useSelector(state => state.isoSingleAssessmentReducer.isoAssessmentSingle);

    function handleChangeTab(event,value) {
		setTabValue(value);
	}

    const changeTabDataState = newState => {
		setTabsData(newState)
	}

    const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

    const handleDisable = () => {
        setDisable(false)
    }

    const dummyMandatoryData = [
        {
            id: 1,
            displayId: 4,
            controlDetail: "Context of the organisation",
            sub_controls: [
                {
                    displayId: 4.1,
                    sub_control_name: "Organisational context",
                    question: "Determine the organization's ISMS objectives and any issues that might affect its effectiveness.",
                    status: [
                        "Unknown",
                        "Non-existent",
                        "Initial",
                        "Limited",
                        "Defined",
                        "Managed",
                        "Optimized",
                        "Not Applicable"
                    ]
                },
                {
                    displayId: 4.2,
                    sub_control_name: "Intrested Parties",
                    question: "Identify interested parties including applicable laws, regulations, contracts etc.",
                    status: [
                        "Unknown",
                        "Non-existent",
                        "Initial",
                        "Limited",
                        "Defined",
                        "Managed",
                        "Optimized",
                        "Not Applicable"
                    ]
                },
                {
                    displayId: 4.3,
                    sub_control_name: "ISMS Scope",
                    question: "Determine and document the ISMS scope.",
                    status: [
                        "Unknown",
                        "Non-existent",
                        "Initial",
                        "Limited",
                        "Defined",
                        "Managed",
                        "Optimized",
                        "Not Applicable"
                    ]
                },
                {
                    displayId: 4.4,
                    sub_control_name: "ISMS",
                    question: "Establish, implement, maintain and continually improve an ISMS according to the standard!",
                    status: [
                        "Unknown",
                        "Non-existent",
                        "Initial",
                        "Limited",
                        "Defined",
                        "Managed",
                        "Optimized",
                        "Not Applicable"
                    ]
                }
            ]
        },
        {
            id: 2,
            displayId: 5,
            controlDetail: "Leadership",
            sub_controls: [
                {
                    displayId: 5.1,
                    sub_control_name: "Leadership & Commitment",
                    question: "Top management must demonstrate leadership & commitment to the ISMS.",
                    status: [
                        "Unknown",
                        "Non-existent",
                        "Initial",
                        "Limited",
                        "Defined",
                        "Managed",
                        "Optimized",
                        "Not Applicable"
                    ]
                },
                {
                    displayId: 5.2,
                    sub_control_name: "Policy",
                    question: "Document the information security policy.",
                    status: [
                        "Unknown",
                        "Non-existent",
                        "Initial",
                        "Limited",
                        "Defined",
                        "Managed",
                        "Optimized",
                        "Not Applicable"
                    ]
                },
                {
                    displayId: 5.3,
                    sub_control_name: "Organizational roles, responsibilities & authorities",
                    question: "Assign and communicate information security rôles & responsibilities.",
                    status: [
                        "Unknown",
                        "Non-existent",
                        "Initial",
                        "Limited",
                        "Defined",
                        "Managed",
                        "Optimized",
                        "Not Applicable"
                    ]
                },
            ]
        }   
    ]

    useEffect(() => {
        if (ISOMandatoryData.iso.length == undefined){
        }
        else if (ISOMandatoryData.iso.length == !undefined) {
            setISOMandatoryDataControls(ISOMandatoryData.iso[0].requirements);
        }

        if(ISOMandatoryDataForDisplayAssessment.length == 0){
        }
        else {
            setISOMandatoryDataControls(ISOMandatoryDataForDisplayAssessment.requirements);
        }
    },[ISOMandatoryData , ISOMandatoryDataControls , ISOMandatoryDataForDisplayAssessment])

    useEffect(() => {
		if(ISOMandatoryData.loading == true) {
			setLoading(true)
		}
		else if(ISOMandatoryData.loading == false) {
			setLoading(false)
		}
	},[ISOMandatoryData.loading])

    //const arr = Object.values(cisData.cis)

	function chunk(arr, chunkSize) {
	if (chunkSize <= 0) throw "Invalid chunk size";
	var R = [];
	for (var i=0,len=arr.length; i<len; i+=chunkSize)
		R.push(arr.slice(i,i+chunkSize));
	return R;
	}

	const chunksOfArray = chunk(ISOMandatoryDataControls , 2);
	const controlOneToTwo = chunksOfArray[0];
	const controlThreeToFour = chunksOfArray[1]
	const controlFiveToSix = chunksOfArray[2]

    return (
        <FusePageSimple 
            style={{display: "none"}}
            classes={{
                content: 'flex',
                header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
            }}
            contentToolbar={
                <Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
                    className="border-b-1"
				>
					<Tab className="h-64" label="Clause 4-5" disabled={disable} onClick={() => {changeTabDataState(true)}} />
					<Tab className="h-64" label="Clause 6-7" disabled={disable} />
					<Tab className="h-64" label="Clause 8-9" disabled={disable} />
				</Tabs>
            }
            content={
                <div className="p-16 sm:p-24 max-w-2xl w-full rounded-lg">
                    {tabValue === 0 && (
                        loading ? <FuseLoading /> :
                        <React.Fragment>
                            {controlOneToTwo.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap >{val.display_id}</Typography>
                                        
                                            <Typography noWrap className="text-left" >{val.details}</Typography>
                                        
                                        <Typography className="invisible" noWrap >{val.desiredScore}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMandatorySubControls ISOMandatorySubcontrolsData={val.sub_requirements} />
                                </AccordionDetails>
                            </Accordion>
                            ))}
                            <ButtonNext changeTab={handleChangeTab} nextTab={2} />
                        </React.Fragment>
                    )}
                    {tabValue === 1 && (
                        loading ? <FuseLoading /> :
                        <React.Fragment>
                            {controlThreeToFour.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap >{val.display_id}</Typography>
                                        
                                            <Typography noWrap className="text-left" >{val.details}</Typography>
                                        
                                        <Typography className="invisible" noWrap >{val.desiredScore}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMandatorySubControls ISOMandatorySubcontrolsData={val.sub_requirements} />
                                    <h1>Details</h1>
                                </AccordionDetails>
                            </Accordion>
                            ))}
                            <ButtonNext changeTab={handleChangeTab} nextTab={2} />
                        </React.Fragment>
                    )}
                    {tabValue === 2 && (
                        loading ? <FuseLoading /> :
                        <React.Fragment>
                            {controlFiveToSix.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap >{val.display_id}</Typography>
                                        
                                        <Typography noWrap className="text-left" >{val.details}</Typography>
                                        
                                        <Typography className="invisible" noWrap >{val.desiredScore}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMandatorySubControls ISOMandatorySubcontrolsData={val.sub_requirements} />
                                </AccordionDetails>
                            </Accordion>
                            ))}
                            <ButtonNext changeTab={handleChangeTab} nextTab={2} />
                        </React.Fragment>
                    )}
                </div>
            }
            innerScroll
        />
    );
}

export default ISOMandatory;