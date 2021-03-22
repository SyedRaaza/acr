import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import {connect} from "react-redux";
import { set } from 'date-fns';
import history from '@history';
import { isoSaveSingleAssessment } from "../../../../../store/redux/index";
import { getISOAssessmentData } from "../../../../../store/redux/index";
import {useTheme} from "@material-ui/core/styles";

function ISOAssessmentsTable (props) {
	const theme = useTheme();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const [rowsPerPage , setRowsPerPage] = useState(5);
	const [page , setPage] = useState(0);
	const [pageOffset , setPageOffset] = useState(0)
	const [limit , setLimit] = useState(5)
	const [previousPageOffset , setPreviousPageOffset] = useState()
    const assessmentData = useSelector(state => state.isoShowAssessmentReducer);

	let paramsData = {
		limit: limit,
		offSet: pageOffset
	}

	useEffect(() => {
		if(assessmentData.loading == true) {
			setLoading(true)
		}
		else if(assessmentData.loading == false) {
			setLoading(false)
			setPageOffset(0)
		}
	},[assessmentData.loading])

	useEffect(() => {
		dispatch(getISOAssessmentData(paramsData));
	} , [dispatch , pageOffset])

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const nextPage = () => {
		let newPageOffset = pageOffset + 5
		setPageOffset(newPageOffset)
		console.log(pageOffset)
		//dispatch(getISOAssessmentData(paramsData));
	}

	const previousPage = () => {
		setPageOffset(pageOffset - 5)
	}

	if (loading) {
		return <FuseLoading />;
	}

	if (assessmentData.cisMatturityData === []) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There are no Assesments!
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow className="h-64">
                                <TableCell
                                        className="p-4 md:p-16"
                                        // key={row.id}
                                        // align={row.align}
                                        // padding={row.disablePadding ? 'none' : 'default'}
                                        // sortDirection={props.order.id === row.id ? props.order.direction : false}
                                    >
                                        Name
                                    </TableCell>
                                    <TableCell
                                        className="p-4 md:p-16"
                                    >
                                        Departments
                                    </TableCell>
                                    <TableCell
                                        className="p-4 md:p-16"
                                    >
                                        Owner
                                    </TableCell>
                                    <TableCell
                                        className="p-4 md:p-16"
                                    >
                                        From
                                    </TableCell>
                                    <TableCell
                                        className="p-4 md:p-16"
                                    >
                                        To
                                    </TableCell>
                        </TableRow>
                    </TableHead>

					<TableBody>
						{assessmentData.isoShowAssessment.data
						.map((val , key) => (							
									<TableRow
										className="h-64 cursor-pointer"
										hover
										role="checkbox"
										tabIndex={-1}
										key={key}
										onClick={() => {history.push('/apps/iso/assessment') ; dispatch(isoSaveSingleAssessment(val))}}								
									>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											{val.name}
										</TableCell>

										<TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
											{val.departments.map((val , key) => (
												<span style={{backgroundColor: theme.palette.secondary.main , color: "#fff" , borderRadius: ".4rem"}} key={key} className="p-2 m-4">{val}</span>
											))}
											
										</TableCell>

										<TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
											{val.owner_id}
										</TableCell>

										<TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
											{val.period_to}
										</TableCell>

										<TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
											{val.period_from}
										</TableCell>
									</TableRow>
								))}
					</TableBody>
				</Table>
			</FuseScrollbars>

			<TablePagination
				className="flex-shrink-0 border-t-1"
				component="div"
				rowsPerPageOptions={[]}
				//labelRowsPerPage=''
				count={assessmentData.isoShowAssessment.count}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page',
					onClick: previousPage
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page',
					onClick: nextPage
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
}


export default React.memo(ISOAssessmentsTable);
