import React , {useState , useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
//import ProductsTableHead from './ProductsTableHead';
import {useTheme} from "@material-ui/core/styles";
import FuseLoading from '@fuse/core/FuseLoading';
import { useDispatch, useSelector } from 'react-redux';
import TableHead from '@material-ui/core/TableHead';
import { Button } from '@material-ui/core';

function IntroductionDoc() {
	const theme = useTheme();

	const [loading, setLoading] = useState(false);
	const userData = useSelector(state => state.newUserReducer.user.data[0])

	if (loading) {
		return <FuseLoading />;
	}

	// function handleRequestSort(event, property) {
	// 	const id = property;
	// 	let direction = 'desc';

	// 	if (order.id === property && order.direction === 'desc') {
	// 		direction = 'asc';
	// 	}

	// 	setOrder({
	// 		direction,
	// 		id
	// 	});
	// }

	// function handleSelectAllClick(event) {
	// 	if (event.target.checked) {
	// 		setSelected(data.map(n => n.id));
	// 		return;
	// 	}
	// 	setSelected([]);
	// }

	// function handleDeselect() {
	// 	setSelected([]);
	// }

	return (
		<>
			<div className="w-full flex flex-col">
				<div className="w-full flex justify-between items-center p-8">
					<Typography className="text-base font-bold">
						All Members
					</Typography>
					<Button
					//component={Link}
					to=""
					className="whitespace-nowrap"
					variant="contained"
					color="secondary"
					>Add New Member</Button>
				</div>
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
					{/* <ProductsTableHead
						selectedProductIds={selected}
						order={order}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={data.length}
						onMenuItemClick={handleDeselect}
					/> */}
					<TableHead>
						<TableRow>
							<TableCell>First Name</TableCell>
							<TableCell align="left">Last Name</TableCell>
							<TableCell align="left">Email</TableCell>
							<TableCell align="left">Role</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{/* {assessmentData.cisMaturityData.data.data.map((val , key) => (							 */}
									<TableRow
										className="h-64 cursor-pointer"
										hover
										role="checkbox"
										//aria-checked={isSelected}
										tabIndex={-1}
										//key={key}
										//selected={isSelected}
										//onClick={event => handleClick(val)}
										//onClick={() => {history.push('/apps/assessment') ; dispatch(provideShowAssessment(val))}}
										
									>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											{userData.first_name}
										</TableCell>

										<TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
											{/* {val.departments.map((val , key) => (
												<span style={{backgroundColor: theme.palette.primary.dark , color: "#fff" , borderRadius: ".4rem"}} key={key} className="p-2 m-4">{val}</span>
											))} */}
											{userData.last_name}
											
										</TableCell>

										<TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
											{/* {val.owner_id} */}
											{userData.email}
										</TableCell>

										<TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
											{/* {val.period_to} */}
											{userData.type}
										</TableCell>

										{/* <TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
											{/* {val.period_from} */}
											{/* Period From Date
										</TableCell>  */}
									</TableRow>
								{/* ))} */}
					</TableBody>
				</Table>
			</FuseScrollbars>

			{/* <TablePagination
				className="flex-shrink-0 border-t-1"
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page'
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page'
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/> */}
		</div>
		</>
	);
}

export default IntroductionDoc;
