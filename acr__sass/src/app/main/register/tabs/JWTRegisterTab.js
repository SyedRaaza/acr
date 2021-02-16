import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Formsy from 'formsy-react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/auth/store/registerSlice';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function JWTRegisterTab({userData}) {


	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);
	const [length , setLength] = useState(4);
	const [isFormValid, setIsFormValid] = useState(false);
	const [email , setEmail] = useState("");
	const [businessEmail , setBusinessEmail] = useState("");
	const [domainErr , setDomainErr] = useState(6)


	const dispatch = useDispatch();
	const register = useSelector(({ auth }) => auth.register);
	const formRef = useRef(null);

	var firstDomain = email;
	var secondDomain = businessEmail;
	
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	useEffect(() => {
		if (register.error && (register.error.username || register.error.password || register.error.email)) {
			formRef.current.updateInputsWithError({
				...register.error
			});
			disableButton();
		}
	}, [register.error]);
	// useEffect(() => {
	// 	alert(JSON.stringify(userData.user.data.error))
	// },[userData])
	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	function handleSubmit(model) {
		dispatch(submitRegister(model));
		//console.log(model)
		//console.log(userData)
		handleOpen();
	}

	const handlePersonalEmail = (model) => {
		setEmail(model.email)
		setBusinessEmail(model.business_email)
		//console.log(model)
		//console.log(firstDomain , secondDomain)
		// setEmail(model.email);
		// setBusinessEmail(model.business_email)
			if(firstDomain == undefined) {
			//console.log(email , businessEmail)
		}
		else if (firstDomain && secondDomain != undefined) {
			let subDomOne = firstDomain.split("@");
			let subDomTwo = secondDomain.split("@")
			//console.log(subDomOne[1] , subDomTwo[1]);
			if(subDomOne[1] == subDomTwo[1]) {
				setDomainErr(6)
			}
			else {
				setDomainErr(100)
			}
		}
	}


	const isSubDomainSame = (model) => {

		// if(email || businessEmail == undefined) {
		// 	//console.log(email , businessEmail)
		// }
		// else {
		// 	let subDomOne = model.email.split("@");
		// 	let subDomTwo = model.business_email.split("@")

		// 	//console.log(subDomOne , subDomTwo);
		// }
		//console.log(model)

	};

	useEffect(() => {
		//console.log(email)
		//console.log(businessEmail)
		//console.log(firstDomain , secondDomain)

		isSubDomainSame()
	},[email , businessEmail])

	return (
		<React.Fragment>
					<div className="w-full">
						<Formsy
							onValidSubmit={handleSubmit}
							onValid={enableButton}
							onInvalid={disableButton}
							ref={formRef}
							className="flex flex-col justify-center w-full"
							onChange={handlePersonalEmail}
						>
							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="first_name"
								label="First Name"
								validations={{
									minLength: 4
								}}
								validationErrors={{
									minLength: 'Min character length is 4'
								}}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Icon className="text-20" color="action">
												person
											</Icon>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
							/>

							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="last_name"
								label="Last Name"
								validations={{
									minLength: 4
								}}
								validationErrors={{
									minLength: 'Min character length is 4'
								}}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Icon className="text-20" color="action">
												person
											</Icon>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
							/>

							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="email"
								label="Email"
								onChange={() => {setDomainErr(6)}}
								validations={{
									isEmail: true,
									minLength: domainErr
								}}
								//onChange={handlePersonalEmail}
								validationErrors={{
									isEmail: 'Please enter a valid email',
									minLength: 'Email & Business email after @ should match'
								}}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Icon className="text-20" color="action">
												email
											</Icon>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
							/>

							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="organization_name"
								label="Organization's Name"
								onChange={() => {setLength(4)}}
								validations={{
									minLength: length
								}}
								validationErrors={{
									minLength: "Organization's name already exists"
								}}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Icon className="text-20" color="action">
												business
											</Icon>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
							/>

							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="business_email"
								label="Business Email"
								validations={{
									isEmail: true,
									minLength: domainErr
								}}
								onChange={() => {setDomainErr(6)}}
								validationErrors={{
									isEmail: 'Please enter a valid email',
									minLength: 'Email & Business email after @ should match'
								}}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Icon className="text-20" color="action">
												email
											</Icon>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
							/>

							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="organization_domain"
								label="Organization's Domain"
								validations="isEmail"
								validations={{
									minLength: 4
								}}
								validationErrors={{
									minLength: 'Minimum length is 4'
								}}
								InputProps={{
									//onKeyUp: () => {handlePersonalEmail()},
									endAdornment: (
										<InputAdornment position="end">
											<Icon className="text-20" color="action">
												dns
											</Icon>
										</InputAdornment>
									)
								}}
								variant="outlined"
								required
							/>


							<Button
								type="submit"
								variant="contained"
								color="primary"
								className="w-full mx-auto mt-16"
								aria-label="REGISTER"
								disabled={!isFormValid}
								value="legacy"
								//onClick={(e)=> {handleOpen(); e.preventDefault()}}
							>
								Register
							</Button>
						</Formsy>
						{userData.user.data.error ? <div>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="simple-modal-title"
							aria-describedby="simple-modal-description"
							disableBackdropClick="true"
						>
							<div className="registerModal">
								<p>Welcome to ACR! <br/>{userData.user.data.message}</p>
								<div className="registerModal--Button">
									<button onClick={(e) => {e.preventDefault();handleClose();setLength(100)}}>Proceed</button>
								</div>
							</div>
						</Modal>
					</div> 
					: 	
					<div>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="simple-modal-title"
							aria-describedby="simple-modal-description"
							disableBackdropClick="true"
						>
							<div className="registerModal">
								<p>Welcome to ACR!<br />Please Login to proceed further.</p>
								<div className="registerModal--Button">
									<Link to="/login">
										<button >Login</button>
									</Link>
								</div>
							</div>
						</Modal>
					</div>}
					</div>
		</React.Fragment>
	);
}

const mapStateToProps = state => {
  //console.log(state)
    return {
        userData: state.auth,
        //cisData: state.cisReducer,
    }
}

// const mapDispatchToProps = dispatch => {
//     //console.log(dispatch)
//     return {
//         getUsers: () => dispatch(getUsers()),
//         reduce: () => dispatch(reduceCake()),
//         getCis: () => dispatch(getCisData())
//     }
// }

export default connect(mapStateToProps)(JWTRegisterTab);
