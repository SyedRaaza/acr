import React , {useState , useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseAnimate from '@fuse/core/FuseAnimate';
import {Link} from 'react-router-dom';
import {Button , Tab , Tabs , Typography , Icon , Accordion , AccordionDetails , AccordionSummary , Card} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import ProductsTable from '../products/ProductsTable';
import ISOShowAssessmentHeader from './showISOAssessments/ISOShowAssessmentsHeader';
import ISOAssessmentsTable from './showISOAssessments/ISOAssessmentsTable'

const ISOShowAssessment = () => {
    return (
        <FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<ISOShowAssessmentHeader />}
			content={<ISOAssessmentsTable />}
			//content={<CisMaturity />}
			innerScroll
		/>
    )
}

export default ISOShowAssessment;