import React , {useState , useEffect} from 'react';
import {useDispatch} from 'react-redux';
import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseAnimate from '@fuse/core/FuseAnimate';
import {Link} from 'react-router-dom';
import {Button , Tab , Tabs , Typography , Icon , Accordion , AccordionDetails , AccordionSummary , Card} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ISOMaturity from "./ISO_Maturity";
import ISOMandatory from "./ISO_Mandatory";
import { isoResetSingleAssessment } from "../../../../store/redux/index";


function ISOParentControls(props) {

    const theme = useTheme();
    const dispatch = useDispatch();
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

    return (
        <FusePageCarded 
            classes={{
                content: 'flex',
                header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
            }}
            header={
                <div className="flex flex-1 w-full items-center justify-between">
                    <div onClick={() => dispatch(isoResetSingleAssessment())} className="flex flex-1 flex-col items-center sm:items-start" >
                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                            <Typography
                                className="flex items-center sm:mb-12"
                                component={Link}
                                role="button"
                                to="/apps/maturity/ISO"
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
					<Tab className="h-64" label="ISO Mandatory Clauses" />
					<Tab className="h-64" label="ISO Controls" />
				</Tabs>
            }
            content={
                <div className="p-16 sm:p-24 max-w-2xl w-full">
                    {tabValue === 0 && (
                        <div className="tab1">
                             <Card elevation={3}>
                                <ISOMandatory />
                             </Card>
                        </div>
                    )}
                    {tabValue === 1 && (
                        <div className="tab1">
                             <Card elevation={3}>
                                <ISOMaturity />
                             </Card>
                        </div>
                    )}
                </div>
            }
            innerScroll
        />
    );
}

export default ISOParentControls;