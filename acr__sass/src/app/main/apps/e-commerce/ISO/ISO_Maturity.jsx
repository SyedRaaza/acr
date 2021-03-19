import React , {useState , useEffect} from 'react';
import {useSelector} from 'react-redux';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTheme } from '@material-ui/core/styles';
import {Button , Tab , Tabs , Typography , Icon , Accordion , AccordionDetails , AccordionSummary} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ISOMaturitySubcontrol from "./IOS_Maturity_Subcontrol";
import FuseLoading from '@fuse/core/FuseLoading';

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
    const [tabsData , setTabsData] = useState(true);
    const [disable , setDisable] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const ISOMaturityData = useSelector(state => state.isoReducer);
    const ISOMaturityDataForDisplayAssessment = useSelector(state => state.isoSingleAssessmentReducer.isoAssessmentSingle);
    const [ISOMaturityDataControls , setISOMaturityDataControls] = useState([]);

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
            controlDetail: "Asset Management",
            section_id: "A8",
            sub_sections: [
                {
                    id: 1,
                    sub_section_detail: "Responsibility for assets",
                    sub_section_id: "A8.1",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.1.1",
                            sub_controls_details: "Inventory of assets",
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
                            id: 2,
                            sub_controls_section: "A8.1.2",
                            sub_controls_details: "Ownership of assets",
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
                            id: 3,
                            sub_controls_section: "A8.1.3",
                            sub_controls_details: "Acceptable use of assets",
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
                            id: 4,
                            sub_controls_section: "A8.1.4",
                            sub_controls_details: "Return of assets",
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
                },
                {
                    id: 2,
                    sub_section_detail: "Information classification",
                    sub_section_id: "A8.2",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.2.1",
                            sub_controls_details: "Classification of information",
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
                            id: 2,
                            sub_controls_section: "A8.2.2",
                            sub_controls_details: "Labelling of information",
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
                            id: 3,
                            sub_controls_section: "A8.2.3",
                            sub_controls_details: "Handling of assets",
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
                },
                {
                    id: 3,
                    sub_section_detail: "Media handling",
                    sub_section_id: "A8.3",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.3.1",
                            sub_controls_details: "Management of removable media",
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
                            id: 2,
                            sub_controls_section: "A8.3.2",
                            sub_controls_details: "Disposal of media",
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
                            id: 3,
                            sub_controls_section: "A8.3.3",
                            sub_controls_details: "Physical media transfer",
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
            ],
        },
        {
            id: 1,
            controlDetail: "Access Control",
            section_id: "A9",
            sub_sections: [
                {
                    id: 1,
                    sub_section_detail: "Responsibility for assets",
                    sub_section_id: "A8.1",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.1.1",
                            sub_controls_details: "Inventory of assets",
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
                            id: 2,
                            sub_controls_section: "A8.1.2",
                            sub_controls_details: "Ownership of assets",
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
                            id: 3,
                            sub_controls_section: "A8.1.3",
                            sub_controls_details: "Acceptable use of assets",
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
                            id: 4,
                            sub_controls_section: "A8.1.4",
                            sub_controls_details: "Return of assets",
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
                },
                {
                    id: 2,
                    sub_section_detail: "Information classification",
                    sub_section_id: "A8.2",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.2.1",
                            sub_controls_details: "Classification of information",
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
                            id: 2,
                            sub_controls_section: "A8.2.2",
                            sub_controls_details: "Labelling of information",
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
                            id: 3,
                            sub_controls_section: "A8.2.3",
                            sub_controls_details: "Handling of assets",
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
                },
                {
                    id: 3,
                    sub_section_detail: "Media handling",
                    sub_section_id: "A8.3",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.3.1",
                            sub_controls_details: "Management of removable media",
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
                            id: 2,
                            sub_controls_section: "A8.3.2",
                            sub_controls_details: "Disposal of media",
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
                            id: 3,
                            sub_controls_section: "A8.3.3",
                            sub_controls_details: "Physical media transfer",
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
            ],
        },
        {
            id: 1,
            controlDetail: "Physical and environmental security",
            section_id: "A8",
            sub_sections: [
                {
                    id: 1,
                    sub_section_detail: "Responsibility for assets",
                    sub_section_id: "A8.1",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.1.1",
                            sub_controls_details: "Inventory of assets",
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
                            id: 2,
                            sub_controls_section: "A8.1.2",
                            sub_controls_details: "Ownership of assets",
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
                            id: 3,
                            sub_controls_section: "A8.1.3",
                            sub_controls_details: "Acceptable use of assets",
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
                            id: 4,
                            sub_controls_section: "A8.1.4",
                            sub_controls_details: "Return of assets",
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
                },
                {
                    id: 2,
                    sub_section_detail: "Information classification",
                    sub_section_id: "A8.2",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.2.1",
                            sub_controls_details: "Classification of information",
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
                            id: 2,
                            sub_controls_section: "A8.2.2",
                            sub_controls_details: "Labelling of information",
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
                            id: 3,
                            sub_controls_section: "A8.2.3",
                            sub_controls_details: "Handling of assets",
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
                },
                {
                    id: 3,
                    sub_section_detail: "Media handling",
                    sub_section_id: "A8.3",
                    sub_controls: [
                        {
                            id: 1,
                            sub_controls_section: "A8.3.1",
                            sub_controls_details: "Management of removable media",
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
                            id: 2,
                            sub_controls_section: "A8.3.2",
                            sub_controls_details: "Disposal of media",
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
                            id: 3,
                            sub_controls_section: "A8.3.3",
                            sub_controls_details: "Physical media transfer",
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
            ],
        },
    ];

    useEffect(() => {
        if(ISOMaturityDataForDisplayAssessment.length == 0){
            setISOMaturityDataControls(ISOMaturityData.iso[0].controls)
        }
        else {
            setISOMaturityDataControls(ISOMaturityDataForDisplayAssessment.controls);
        }
    },[ISOMaturityDataForDisplayAssessment , ISOMaturityData])

    useEffect(() => {
		if(ISOMaturityData.loading == true) {
			setLoading(true)
		}
		else if(ISOMaturityData.loading == false) {
			setLoading(false)
		}
	},[ISOMaturityData.loading])

	function chunk(arr, chunkSize) {
	if (chunkSize <= 0) throw "Invalid chunk size";
	var R = [];
	for (var i=0,len=arr.length; i<len; i+=chunkSize)
		R.push(arr.slice(i,i+chunkSize));
	return R;
	}

	const chunksOfArray = chunk(ISOMaturityDataControls , 4);
	const controlOne = chunksOfArray[0];
	const controlTwo = chunksOfArray[1]
	const controlThree = chunksOfArray[2]
	const controlFour = chunksOfArray[3]

    if (loading) {
		return <FuseLoading />;
	}

    return (
        <FusePageSimple 
            style={{borderRadius: "10px"}}
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
				>
					<Tab className="h-64" label="Control 1-4" onClick={() => {changeTabDataState(true)}} />
					<Tab className="h-64" label="Control 5-8" />
					<Tab className="h-64" label="Control 9-12" />
					<Tab className="h-64" label="Control 13-16" />
				</Tabs>
            }
            content={
                <div className="p-16 sm:p-24 max-w-2xl w-full rounded-lg">
                    {tabValue === 0 && (
                        tabsData ?
                        <React.Fragment>
                            {/* <AccordianComponent cisData={cisData.cis.control1} /> */}
                            {controlOne.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap className="text-left" >{val.display_id}</Typography>
                                        <Typography noWrap >{val.details}</Typography>
                                        <Typography className="invisible" noWrap >{`Desired Score: ${val.desiredScore}`}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMaturitySubcontrol ISOSubcontrolsData={val.sub_controls} />
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
                            {/* <AccordianComponent cisData={cisData.cis.control1} /> */}
                            {controlTwo.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap className="text-left" >{val.display_id}</Typography>
                                        <Typography noWrap >{val.details}</Typography>
                                        <Typography className="invisible" noWrap >{`Desired Score: ${val.desiredScore}`}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMaturitySubcontrol ISOSubcontrolsData={val.sub_controls} />
                                </AccordionDetails>
                            </Accordion>
                            ))}
                            <ButtonNext changeTab={handleChangeTab} nextTab={1} />
                        </React.Fragment>
                        :
                        <React.Fragment>

                        </React.Fragment>
                    )}
                    {tabValue === 2 && (
                        tabsData ?
                        <React.Fragment>
                            {/* <AccordianComponent cisData={cisData.cis.control1} /> */}
                            {controlThree.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap className="text-left" >{val.display_id}</Typography>
                                        <Typography noWrap >{val.details}</Typography>
                                        <Typography className="invisible" noWrap >{`Desired Score: ${val.desiredScore}`}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMaturitySubcontrol ISOSubcontrolsData={val.sub_controls} />
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
                            {/* <AccordianComponent cisData={cisData.cis.control1} /> */}
                            {controlFour.map((val , key) => (
                            <Accordion style={{backgroundColor: theme.palette.primary.dark, color: "#fff" , margin: "0.4rem 0 0.4rem 0" }} key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <div className="accordianSummary">
                                        <Typography noWrap className="text-left" >{val.display_id}</Typography>
                                        <Typography noWrap >{val.details}</Typography>
                                        <Typography className="invisible" noWrap >{`Desired Score: ${val.desiredScore}`}</Typography>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ISOMaturitySubcontrol ISOSubcontrolsData={val.sub_controls} />
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

export default React.memo(ISOMaturity);




// [

//     {
//         sub_controls: [
//             {
//                 id: 1,
//                 sub_controls_details: "Management direction for information security",
//                 question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
//                 status: [
//                     "Unknown",
//                     "Non-existent",
//                     "Initial",
//                     "Limited",
//                     "Defined",
//                     "Managed",
//                     "Optimized",
//                     "Not Applicable"
//                 ],
//                 cml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 cs: 5,
//                 dml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 ds: 5                    
//             },
//             {
//                 id: 2,
//                 question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 0              
//             },
//             {
//                 id: 3,
//                 question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 3              
//             },
//             {
//                 id: 4,
//                 question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
//                 cml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 cs: 5,
//                 dml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 ds: 5                    
//             },
//             {
//                 id: 5,
//                 question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 0              
//             },
//             {
//                 id: 6,
//                 question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 3              
//             }

//         ]
//     },
//     {
//         id: 1,
//         controlDetail: "Organization of information security",
//         currentScore: "4.02",
//         desiredScore: "1.97",
//         sub_controls: [
//             {
//                 id: 1,
//                 sub_controls_details: "",
//                 question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
//                 cml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 cs: 5,
//                 dml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 ds: 5                    
//             },
//             {
//                 id: 2,
//                 question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 0              
//             },
//             {
//                 id: 3,
//                 question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 3              
//             },
//             {
//                 id: 4,
//                 question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
//                 cml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 cs: 5,
//                 dml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 ds: 5                    
//             },
//             {
//                 id: 5,
//                 question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 0              
//             },
//             {
//                 id: 6,
//                 question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 3              
//             }

//         ]
//     },
//     {
//         id: 1,
//         controlDetail: "Risk Management (ISO 27005:2011)",
//         currentScore: "3.07",
//         desiredScore: "4.16",
//         sub_controls: [
//             {
//                 id: 1,
//                 question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
//                 cml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 cs: 5,
//                 dml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 ds: 5                    
//             },
//             {
//                 id: 2,
//                 question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 0              
//             },
//             {
//                 id: 3,
//                 question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 3              
//             },
//             {
//                 id: 4,
//                 question: "Does the organization have a person or group has the role and responsibility for an ongoing process of evaluating the probability that known threats will exploit vulnerabilities and the resulting the impact on valuable assets. Risk management also assigns relative priorities for mitigation plans and implementation.",
//                 cml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 cs: 5,
//                 dml: [
//                     "Not Performed",
//                     "Yes",
//                     "No"
//                 ],
//                 ds: 5                    
//             },
//             {
//                 id: 5,
//                 question: "Does the organization have a process for identifying and assessing reasonably foreseeable internal and external risks to the security, confidentiality, and/or integrity of any electronic, paper, or other records containing sensitive information?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 0              
//             },
//             {
//                 id: 6,
//                 question: "Does the organization conduct routine risk assessments to identify the key objectives that need to be supported by the information security program?",
//                 cml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 cs: 2,
//                 dml: [
//                     "Not Performed",
//                     "Performed Informally",
//                     "Planned",
//                     "Well Defined",
//                     "Quantitatively Controlled",
//                     "Continuously Improving",
//                     "Not Applicable"
//                 ],
//                 ds: 3              
//             }

//         ]
//     }
// ]