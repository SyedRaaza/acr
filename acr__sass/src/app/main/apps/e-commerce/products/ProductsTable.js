import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import { getProducts, selectProducts } from '../store/productsSlice';
import ProductsTableHead from './ProductsTableHead';
import {connect} from "react-redux";
import {getCisMaturityData} from "../../../../store/redux/index";
import {masterData} from "../order/accordian";
import { set } from 'date-fns';
import history from '@history';
import { provideShowAssessment } from "../../../../store/redux/index";
import {useTheme} from "@material-ui/core/styles";

function ProductsTable(props) {
	const theme = useTheme();
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);
	const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.products.searchText);

	const [loading, setLoading] = useState(true);
	const [selected, setSelected] = useState([]);
	const [data, setData] = useState(products);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});
	const {assessmentData} = props;
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	useEffect(() => {
		//dispatch(getCisMaturityData());
		if(assessmentData.loading == true) {
			setLoading(true)
		}
		else if(assessmentData.loading == false) {
			setLoading(false)
		}
	},[assessmentData.loading])

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(_.filter(products, item => item.name.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(products);
		}
	}, [products, searchText]);

	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}

		setOrder({
			direction,
			id
		});
	}

	function handleSelectAllClick(event) {
		if (event.target.checked) {
			setSelected(data.map(n => n.id));
			return;
		}
		setSelected([]);
	}

	function handleDeselect() {
		setSelected([]);
	}

	function handleClick(item) {
		props.history.push(`/apps/e-commerce/products/${item.id}/${item.handle}`);
	}

	function handleCheck(event, id) {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	}

	function handleChangePage(event, value) {
		setPage(value);
	}

	function handleChangeRowsPerPage(event) {
		setRowsPerPage(event.target.value);
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
					<ProductsTableHead
						selectedProductIds={selected}
						order={order}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={data.length}
						onMenuItemClick={handleDeselect}
					/>

					<TableBody>
						{assessmentData.cisMaturityData.data.data.map((val , key) => (							
									<TableRow
										className="h-64 cursor-pointer"
										hover
										role="checkbox"
										//aria-checked={isSelected}
										tabIndex={-1}
										key={key}
										//selected={isSelected}
										//onClick={event => handleClick(val)}
										onClick={() => {history.push('/apps/assessment') ; dispatch(provideShowAssessment(val))}}
										
									>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											{val.name}
										</TableCell>

										<TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
											{val.departments.map((val , key) => (
												<span style={{backgroundColor: theme.palette.primary.dark , color: "#fff" , borderRadius: ".4rem"}} key={key} className="p-2 m-4">{val}</span>
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
			/>
		</div>
	);
}


const mapStateToProps = state => {
	return {
		assessmentData: state.cisMaturityDataReducer
	}
}

export default connect(mapStateToProps)(withRouter(ProductsTable));
