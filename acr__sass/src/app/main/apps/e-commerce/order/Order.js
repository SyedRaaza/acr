import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import GoogleMap from 'google-map-react';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store';
import { resetOrder, getOrder } from '../store/orderSlice';
import OrderInvoice from './OrderInvoice';
import OrdersStatus from './OrdersStatus';
import AccordianComponent from "./accordian";
import {connect} from 'react-redux';
import {getUsers , reduceCake , getCisData} from '../../../../store/redux/index';
import AssesmentInfoForm from "./assesmentInfoForm";



import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
	//console.log(props)
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
	const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
	const theme = useTheme();
	const routeParams = useParams();
	const [tabValue, setTabValue] = useState(0);
	const [noOrder, setNoOrder] = useState(false);
	const [map, setMap] = useState('shipping');
	const {getCis , cisData} = props;
	useDeepCompareEffect(() => {
		dispatch(getOrder(routeParams)).then(action => {
			if (!action.payload) {
				setNoOrder(true);
			}
		});
	}, [dispatch, routeParams]);
	console.log(cisData.cis)
	useEffect(() => {
		return () => {
			dispatch(resetOrder());
			setNoOrder(false);
		};
	}, [dispatch]);

	useEffect(() => {
		getCis()
	},[])

	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};



	function handleChangeTab(event,value) {
		console.log(value)
		setTabValue(value);
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

	const chunksOfArray = chunk(cisData.cis , 5);
	const controlOneToFive = chunksOfArray[0];
	const controlSixToTen = chunksOfArray[1]
	// console.log(chunksOfArray)
	// console.log(controlOneToFive)

	if (noOrder) {
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

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				order && (
					<div className="flex flex-1 w-full items-center justify-between">
						<div className="flex flex-1 flex-col items-center sm:items-start">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Typography
									className="flex items-center sm:mb-12"
									component={Link}
									role="button"
									to="/apps/e-commerce/products"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">CIS Maturity</span>
								</Typography>
							</FuseAnimate>

							{/* <div className="flex flex-col min-w-0 items-center sm:items-start">
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography className="text-16 sm:text-20 truncate">
										{`Order ${order.reference}`}
									</Typography>
								</FuseAnimate>

								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="caption">
										{`From ${order.customer.firstName} ${order.customer.lastName}`}
									</Typography>
								</FuseAnimate>
							</div> */}
						</div>
					</div>
				)
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
					<Tab className="h-64" label="CSC 1-5" />
					<Tab className="h-64" label="CSC 6-10" />
					<Tab className="h-64" label="CSC 11-15" />
					<Tab className="h-64" label="CSC 16-20" />
				</Tabs>
			}
			content={
				order && (
					<div className="p-16 sm:p-24 max-w-2xl w-full">
						{/* Assesment Info */}
						{tabValue === 0 && (
							<div className="tab1">
								<AssesmentInfoForm changeTab={handleChangeTab} nextTab={1} />
							</div>
							// <div>
							// 	<div className="pb-48">
							// 		<div className="pb-16 flex items-center">
							// 			<Icon color="action">account_circle</Icon>
							// 			<Typography className="h2 mx-16" color="textSecondary">
							// 				Customer
							// 			</Typography>
							// 		</div>

							// 		<div className="mb-24">
							// 			<div className="table-responsive mb-48">
							// 				<table className="simple">
							// 					<thead>
							// 						<tr>
							// 							<th>Name</th>
							// 							<th>Email</th>
							// 							<th>Phone</th>
							// 							<th>Company</th>
							// 						</tr>
							// 					</thead>
							// 					<tbody>
							// 						<tr>
							// 							<td>
							// 								<div className="flex items-center">
							// 									<Avatar src={order.customer.avatar} />
							// 									<Typography className="truncate mx-8">
							// 										{`${order.customer.firstName} ${order.customer.lastName}`}
							// 									</Typography>
							// 								</div>
							// 							</td>
							// 							<td>
							// 								<Typography className="truncate">
							// 									{order.customer.email}
							// 								</Typography>
							// 							</td>
							// 							<td>
							// 								<Typography className="truncate">
							// 									{order.customer.phone}
							// 								</Typography>
							// 							</td>
							// 							<td>
							// 								<span className="truncate">{order.customer.company}</span>
							// 							</td>
							// 						</tr>
							// 					</tbody>
							// 				</table>
							// 			</div>

							// 			<Accordion
							// 				className="shadow"
							// 				expanded={map === 'shipping'}
							// 				onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
							// 			>
							// 				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							// 					<Typography className="font-600">Shipping Address</Typography>
							// 				</AccordionSummary>
							// 				<AccordionDetails className="flex flex-col md:flex-row">
							// 					<Typography className="w-full md:max-w-256 mb-16 md:mb-0">
							// 						{order.customer.shippingAddress.address}
							// 					</Typography>
							// 					<div className="w-full h-320">
							// 						<GoogleMap
							// 							bootstrapURLKeys={{
							// 								key: process.env.REACT_APP_MAP_KEY
							// 							}}
							// 							defaultZoom={15}
							// 							defaultCenter={[
							// 								order.customer.shippingAddress.lat,
							// 								order.customer.shippingAddress.lng
							// 							]}
							// 						>
							// 							<Marker
							// 								text={order.customer.shippingAddress.address}
							// 								lat={order.customer.shippingAddress.lat}
							// 								lng={order.customer.shippingAddress.lng}
							// 							/>
							// 						</GoogleMap>
							// 					</div>
							// 				</AccordionDetails>
							// 			</Accordion>

							// 			<Accordion
							// 				className="shadow"
							// 				expanded={map === 'invoice'}
							// 				onChange={() => setMap(map !== 'invoice' ? 'invoice' : false)}
							// 			>
							// 				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							// 					<Typography className="font-600">Invoice Address</Typography>
							// 				</AccordionSummary>
							// 				<AccordionDetails className="flex flex-col md:flex-row">
							// 					<Typography className="w-full md:max-w-256 mb-16 md:mb-0">
							// 						{order.customer.invoiceAddress.address}
							// 					</Typography>
							// 					<div className="w-full h-320">
							// 						<GoogleMap
							// 							bootstrapURLKeys={{
							// 								key: process.env.REACT_APP_MAP_KEY
							// 							}}
							// 							defaultZoom={15}
							// 							defaultCenter={[
							// 								order.customer.invoiceAddress.lat,
							// 								order.customer.invoiceAddress.lng
							// 							]}
							// 						>
							// 							<Marker
							// 								text={order.customer.invoiceAddress.address}
							// 								lat={order.customer.invoiceAddress.lat}
							// 								lng={order.customer.invoiceAddress.lng}
							// 							/>
							// 						</GoogleMap>
							// 					</div>
							// 				</AccordionDetails>
							// 			</Accordion>
							// 		</div>
							// 	</div>

							// 	<div className="pb-48">
							// 		<div className="pb-16 flex items-center">
							// 			<Icon color="action">access_time</Icon>
							// 			<Typography className="h2 mx-16" color="textSecondary">
							// 				Order Status
							// 			</Typography>
							// 		</div>

							// 		<div className="table-responsive">
							// 			<table className="simple">
							// 				<thead>
							// 					<tr>
							// 						<th>Status</th>
							// 						<th>Updated On</th>
							// 					</tr>
							// 				</thead>
							// 				<tbody>
							// 					{order.status.map(status => (
							// 						<tr key={status.id}>
							// 							<td>
							// 								<OrdersStatus name={status.name} />
							// 							</td>
							// 							<td>{status.date}</td>
							// 						</tr>
							// 					))}
							// 				</tbody>
							// 			</table>
							// 		</div>
							// 	</div>

							// 	<div className="pb-48">
							// 		<div className="pb-16 flex items-center">
							// 			<Icon color="action">attach_money</Icon>
							// 			<Typography className="h2 mx-16" color="textSecondary">
							// 				Payment
							// 			</Typography>
							// 		</div>

							// 		<div className="table-responsive">
							// 			<table className="simple">
							// 				<thead>
							// 					<tr>
							// 						<th>TransactionID</th>
							// 						<th>Payment Method</th>
							// 						<th>Amount</th>
							// 						<th>Date</th>
							// 					</tr>
							// 				</thead>
							// 				<tbody>
							// 					<tr>
							// 						<td>
							// 							<span className="truncate">{order.payment.transactionId}</span>
							// 						</td>
							// 						<td>
							// 							<span className="truncate">{order.payment.method}</span>
							// 						</td>
							// 						<td>
							// 							<span className="truncate">{order.payment.amount}</span>
							// 						</td>
							// 						<td>
							// 							<span className="truncate">{order.payment.date}</span>
							// 						</td>
							// 					</tr>
							// 				</tbody>
							// 			</table>
							// 		</div>
							// 	</div>

							// 	<div className="pb-48">
							// 		<div className="pb-16 flex items-center">
							// 			<Icon color="action">local_shipping</Icon>
							// 			<Typography className="h2 mx-12" color="textSecondary">
							// 				Shipping
							// 			</Typography>
							// 		</div>

							// 		<div className="table-responsive">
							// 			<table className="simple">
							// 				<thead>
							// 					<tr>
							// 						<th>Tracking Code</th>
							// 						<th>Carrier</th>
							// 						<th>Weight</th>
							// 						<th>Fee</th>
							// 						<th>Date</th>
							// 					</tr>
							// 				</thead>
							// 				<tbody>
							// 					{order.shippingDetails.map(shipping => (
							// 						<tr key={shipping.date}>
							// 							<td>
							// 								<span className="truncate">{shipping.tracking}</span>
							// 							</td>
							// 							<td>
							// 								<span className="truncate">{shipping.carrier}</span>
							// 							</td>
							// 							<td>
							// 								<span className="truncate">{shipping.weight}</span>
							// 							</td>
							// 							<td>
							// 								<span className="truncate">{shipping.fee}</span>
							// 							</td>
							// 							<td>
							// 								<span className="truncate">{shipping.date}</span>
							// 							</td>
							// 						</tr>
							// 					))}
							// 				</tbody>
							// 			</table>
							// 		</div>
							// 	</div>
							// </div>
						)}
						{/* SCS 1-5 */}
						{tabValue === 1 && (
							<React.Fragment>
								{/* <AccordianComponent cisData={cisData.cis.control1} /> */}
								{controlOneToFive.map((val , key) => (
								<Accordion key={key} onClick={(e) => {console.log(val)}} expanded={expanded === key} onChange={handleChange(key)}>
									<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
									>
										<div className="accordianSummary">
											<Typography noWrap className={classes.heading}>{val.display_id}</Typography>
										</div>
									</AccordionSummary>
									<AccordionDetails>
									<AccordianComponent cisData={val} />
									</AccordionDetails>
								</Accordion>
								))}
								<ButtonNext changeTab={handleChangeTab} nextTab={2} />
							</React.Fragment>
							// <div className="table-responsive">
							// 	<table className="simple">
							// 		<thead>
							// 			<tr>
							// 				<th>ID</th>
							// 				<th>Image</th>
							// 				<th>Name</th>
							// 				<th>Price</th>
							// 				<th>Quantity</th>
							// 			</tr>
							// 		</thead>
							// 		<tbody>
							// 			{order.products.map(product => (
							// 				<tr key={product.id}>
							// 					<td className="w-64">{product.id}</td>
							// 					<td className="w-80">
							// 						<img className="product-image" src={product.image} alt="product" />
							// 					</td>
							// 					<td>
							// 						<Typography
							// 							component={Link}
							// 							to={`/apps/e-commerce/products/${product.id}`}
							// 							className="truncate"
							// 							style={{
							// 								color: 'inherit',
							// 								textDecoration: 'underline'
							// 							}}
							// 						>
							// 							{product.name}
							// 						</Typography>
							// 					</td>
							// 					<td className="w-64 text-right">
							// 						<span className="truncate">${product.price}</span>
							// 					</td>
							// 					<td className="w-64 text-right">
							// 						<span className="truncate">{product.quantity}</span>
							// 					</td>
							// 				</tr>
							// 			))}
							// 		</tbody>
							// 	</table>
							// </div>
						)}
						{/* Invoice */}
						{/* {tabValue === 2 && <OrderInvoice order={order} />} */}
						{tabValue === 2 && 
						<React.Fragment>
							{/* <AccordianComponent cisData={cisData.cis.control1} /> */}
							{controlSixToTen.map((val , key) => (
							<Accordion key={key} expanded={expanded === key} onChange={handleChange(key)}>
								<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
								>
									<div className="accordianSummary">
										<Typography className={classes.heading}>{val.display_id}</Typography>
									</div>
								</AccordionSummary>
								<AccordionDetails>
								<AccordianComponent cisData={val} />
								</AccordionDetails>
							</Accordion>
							))}
							<ButtonNext changeTab={handleChangeTab} nextTab={3} />
						</React.Fragment>	
						}
						{tabValue === 3 && (
						<React.Fragment>
							{/* <AccordianComponent cisData={cisData.cis.control1} /> */}
							{/* {arr.map((val , key) => (
							<Accordion key={key} onClick={(e) => {console.log("acc")}} expanded={expanded === key} onChange={handleChange(key)}>
								<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
								>
									<div className="accordianSummary">
										<Typography className={classes.heading}>Control {key + 11}</Typography>
									</div>
								</AccordionSummary>
								<AccordionDetails>
								<AccordianComponent cisData={arr[key]} />
								</AccordionDetails>
							</Accordion>
							))}
							<ButtonNext changeTab={handleChangeTab} nextTab={4} /> */}
						</React.Fragment>
						)}
						{tabValue === 4 && (
						<React.Fragment>
							{/* <AccordianComponent cisData={cisData.cis.control1} /> */}
							{/* {arr.map((val , key) => (
							<Accordion key={key} onClick={(e) => {console.log("acc")}} expanded={expanded === key} onChange={handleChange(key)}>
								<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
								>
									<div className="accordianSummary">
										<Typography className={classes.heading}>Control {key + 16}</Typography>
									</div>
								</AccordionSummary>
								<AccordionDetails>
								<AccordianComponent cisData={arr[key]} />
								</AccordionDetails>
							</Accordion>
							))}
							<ButtonNext changeTab={handleChangeTab} nextTab={4} btnText="Done" /> */}
						</React.Fragment>
						)}
					</div>
				)
			}
			innerScroll
		/>
	);
}

const mapStateToProps = state => {
	//console.log(state)
	return {
		cisData: state.cisReducer,
	}
}

const mapDispatchToProps = dispatch => {
	//console.log(dispatch)
	return {
		getCis: () => dispatch(getCisData())
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(withReducer('eCommerceApp', reducer)(Order));