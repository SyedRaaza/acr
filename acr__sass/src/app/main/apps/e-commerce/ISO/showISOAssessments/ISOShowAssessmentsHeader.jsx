import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

function ISOShowAssessmentHeader(props) {

	const theme = useTheme();

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">shopping_basket</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						ISO Maturity Assesment
					</Typography>
				</FuseAnimate>
			</div>
			<FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Button
                        component={Link}
                        to="/apps/maturrity/ISO/add"
                        variant="contained"
                        color="secondary"
                    >
                        <span className="hidden sm:flex">Add New Assesment</span>
						<span className="flex sm:hidden">New</span>
                    </Button>
					{/* <Button
						component={Link}
						to="/apps/e-commerce/orders/1"
						className="whitespace-nowrap"
						variant="contained"
						color={theme.palette.primary.main}
					>
						<span className="hidden sm:flex">Add New Assesment</span>
						<span className="flex sm:hidden">New</span>
					</Button> */}
			</FuseAnimate>
		</div>
	);
}

export default ISOShowAssessmentHeader;