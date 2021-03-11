import React , {useState , useEffect} from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseAnimate from '@fuse/core/FuseAnimate';
import {Link} from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import {Button , Tab , Tabs , Typography , Icon , Accordion , AccordionDetails , AccordionSummary} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ISOMaturitySubcontrol from "./IOS_Maturity_Subcontrol";

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

const ISOMaturity = (props) => {
    const theme = useTheme();
    const [tabValue, setTabValue] = useState(0);
    const [tabsData , setTabsData] = useState(false);
    const [disable , setDisable] = useState(false);
    const [expanded, setExpanded] = useState(false);

    function handleChangeTab(event,value) {
		setTabValue(value);
	}

    const changeTabDataState = newState => {
		setTabsData(newState)
	}

    const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

    const dummyDataForIOS = [
        {
            id: 1,
            controlDetail: "Risk Management (ISO 27005:2011)",
            currentScore: "3.00",
            desiredScore: "2.67",
            sub_controls: [
                {
                    id: 1,
                    question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
                    cml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    cs: 5,
                    dml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    ds: 5                    
                },
                {
                    id: 2,
                    question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 0              
                },
                {
                    id: 3,
                    question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 3              
                },
                {
                    id: 4,
                    question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
                    cml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    cs: 5,
                    dml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    ds: 5                    
                },
                {
                    id: 5,
                    question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 0              
                },
                {
                    id: 6,
                    question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 3              
                }

            ]
        },
        {
            id: 1,
            controlDetail: "Risk Management (ISO 27005:2011)",
            currentScore: "4.02",
            desiredScore: "1.97",
            sub_controls: [
                {
                    id: 1,
                    question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
                    cml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    cs: 5,
                    dml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    ds: 5                    
                },
                {
                    id: 2,
                    question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 0              
                },
                {
                    id: 3,
                    question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 3              
                },
                {
                    id: 4,
                    question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
                    cml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    cs: 5,
                    dml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    ds: 5                    
                },
                {
                    id: 5,
                    question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 0              
                },
                {
                    id: 6,
                    question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 3              
                }

            ]
        },
        {
            id: 1,
            controlDetail: "Risk Management (ISO 27005:2011)",
            currentScore: "3.07",
            desiredScore: "4.16",
            sub_controls: [
                {
                    id: 1,
                    question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
                    cml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    cs: 5,
                    dml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    ds: 5                    
                },
                {
                    id: 2,
                    question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 0              
                },
                {
                    id: 3,
                    question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 3              
                },
                {
                    id: 4,
                    question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
                    cml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    cs: 5,
                    dml: [
                        "Not Performed",
                        "Yes",
                        "No"
                    ],
                    ds: 5                    
                },
                {
                    id: 5,
                    question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 0              
                },
                {
                    id: 6,
                    question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
                    cml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    cs: 2,
                    dml: [
                        "Not Performed",
                        "Performed Informally",
                        "Planned",
                        "Well Defined",
                        "Quantitatively Controlled",
                        "Continuously Improving",
                        "Not Applicable"
                    ],
                    ds: 3              
                }

            ]
        }
    ]
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
                                //to="/apps/maturity/cis"
                                color="inherit"
                            >
                                <Icon className="text-20">
                                    {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
                                </Icon>
                                <span className="mx-4">ISO 2700 Maturity</span>
                            </Typography>
                        </FuseAnimate>
                    </div>
                </div>
            }
            contentToolbar={
                <Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64" label="Assesment Information" />
					<Tab className="h-64" label="CSC 1-5" disabled={disable} onClick={() => {changeTabDataState(true)}} />
					<Tab className="h-64" label="CSC 6-10" disabled={disable} />
					<Tab className="h-64" label="CSC 11-15" disabled={disable} />
					<Tab className="h-64" label="CSC 16-20" disabled={disable} />
				</Tabs>
            }
            content={
                <div className="p-16 sm:p-24 max-w-2xl w-full">
                    {tabValue === 0 && (
                        <div className="tab1">
                            {/* <AssesmentInfoForm changeTab={handleChangeTab} nextTab={1} handleEnableTabs={handleEnableTabs} /> */}
                            <h1>Tab Data Here</h1>
                        </div>
                    )}
                    {tabValue === 1 && (
                        tabsData ?
                        <React.Fragment>
                            {/* <AccordianComponent cisData={cisData.cis.control1} /> */}
                            {dummyDataForIOS.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap >{val.controlDetail}</Typography>
                                        
                                            <Typography noWrap className="text-left" >{`Current Score: ${val.currentScore}`}</Typography>
                                        
                                        <Typography className="" noWrap >{`Desired Score: ${val.desiredScore}`}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMaturitySubcontrol ISOSubcontrolsData={dummyDataForIOS} />
                                </AccordionDetails>
                            </Accordion>
                            ))}
                            <ButtonNext changeTab={handleChangeTab} nextTab={2} />
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

export default ISOMaturity;