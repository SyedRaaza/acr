import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Formsy from 'formsy-react';
import React, { useEffect, useRef, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {changeBaseURL} from "app/services/backendAPI/APIConfigs";
import {Link} from 'react-router-dom';
import { setUser } from '../../../store/redux/index';
import history from '@history';
import {getToken} from "app/services/backendAPI/APIConfigs";
import { setNewSettings } from 'app/store/fuse/settingsSlice';
import { lightBlue, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	button: {
	  display: 'block',
	  marginTop: theme.spacing(2),
	},
  }));

  const showPasswordFieldError = () => {
	  return (
		  <span>Length should be 4</span>
	  )
  }
  const handlePersonalEmail = (model) => {
	console.log(model)
}


function JWTLoginTab({loginData , newUser}) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [org, setOrg] = React.useState('');
	const [open, setOpen] = React.useState(false);
    const [postId, setPostId] = useState(null);
	const login = useSelector(({ auth }) => auth.login);
	const [isFormValid, setIsFormValid] = useState(false);
	const [isEmail, setEmail] = useState(null);
	const [posts, setPosts] = useState([]);
	const [showPassword, setShowPassword] = useState(false);
	const [subDomain , setSubDomain] = useState([]);
	const [isView, setView] = useState(null);
	const formRef = useRef(null);
	const [showData, setshowData]=useState(false);
	const [length , setLength] = useState(4);
	const [passwordError , setPasswordError] = useState("Length should be 4");
	const settings = useSelector(({ fuse }) => fuse.settings.current);
	const userTheme = useSelector(state => state.newUserReducer.user)

	const newuserDataOne = newUser.error;

	const showSelectOrg = ()=>{
		if (isView) {
			setView(false);
		} else {
			setView(true);
		}
		
	}



const Emaildata = data => {
	return new Promise((resolve , reject) => {
		axios.post('http://pligence-acr.com/tenant/domain/' , 
		{"email":data},
		{
			headers: {
				"content-type":"application/json"
			}
		}
		)
		.then(response => { 
			setPosts(response.data.data)
		})
		.catch(error => {
			console.log(error.response)
		});
	})
};


	useEffect(() => {
		if (login.error && (login.error.email || login.error.password)) {
			formRef.current.updateInputsWithError({
				...login.error
			});
			disableButton();
		}
	}, [login.error]);

	useEffect(() => {
		setSubDomain(loginData.user.data.data)
	},[]);
	
	useEffect(() => {
		if ( subDomain === undefined) {
			console.log(undefined)
		}
		else {
			setSubDomain(subDomain[0]);
		};
	},[])
  
	const handleChange = (event) => {
	  setOrg(event.target.value);
	};
  
	const showBaseURL = (URL) => {
		changeBaseURL(URL);
		///dispatch(setUser(model))
	}

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}
   
	function handleSubmit(model) {
		dispatch(setUser(model))
	}


	var customizeTheme = {
		palette: {
			type: 'light',
			primary: {
				light: '#b3d1d1',
				main: '#006565',
				dark: '#003737'
			},
			secondary: {
				light: '#ffecc0',
				main: '#FFBE2C',
				dark: '#ff9910',
				contrastText: '#272727'
			},
			background: {
				paper: '#FFFFFF',
				default: '#F0F7F7'
			},
			error: red
		},
		status: {
			danger: 'green'
		}
	}


	useEffect(() => {
		if(newuserDataOne == true) {
			setLength(100)
			setPasswordError(true)
		}
		else if (newuserDataOne == false) {
			getToken(newUser.data)
			customizeTheme = newUser.data[0].organization_data.color_schemes
			//alert(JSON.stringify(customizeTheme))
		}
	},[newuserDataOne , customizeTheme])
	

	const handleChanges = event => {
		const value=event.target.value;
		setEmail(value)
	   	Emaildata(value);
	}


	function handleSchemeSelect(themeId) {
		const newSettings = {
			...settings,
			theme: {
				main: themeId,
				navbar: themeId,
				toolbar: themeId,
				footer: themeId
			},
            customizeTheme
		};
		dispatch(setNewSettings(newSettings));
	}

	return (
		<div className="w-full">
			<Formsy
				onValidSubmit={handleSubmit}
				onValid={enableButton}
				onInvalid={disableButton}
				ref={formRef}
				className="flex flex-col justify-center w-full"
			>
				<TextFieldFormsy
					className="mb-16"
					type="text"
					name="email"
					label="Username/Email"
					validations={{
						minLength:length,
						isEmail,
					}}
					onChange={() => {handlePersonalEmail() ; setLength(4)}}
					onBlur= {(e)=>{handleChanges(e)}}
					validationErrors={{
						isEmail: 'Please enter a valid email',
						minLength: 'Email is Incorrect'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end" >
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
					type="password"
					name="password"
					label="Password"
					value="admin"
					onChange={() => {setLength(4) ; setPasswordError(false)}}
					onClick={() => showSelectOrg()}
					validations={{
						minLength: length,
					}}
					validationErrors={{
						minLength: length > 4 ? "Password is incorrect" : "Length should be 4",
					}}
					InputProps={{
						className: 'pr-2',
						type: showPassword ? 'text' : 'password',
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={() => setShowPassword(!showPassword)}>
									<Icon className="text-20" color="action">
										{showPassword ? 'visibility' : 'visibility_off'}
									</Icon>
								</IconButton>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>
					<FormControl variant="outlined" >
						<InputLabel htmlFor="outlined-age-native-simple">Organization</InputLabel>
						<Select
						//native
						value={org}
						onChange={handleChange}
						label="Organization"
						inputProps={{
							name: 'policy',
							id: 'policy-controlled',
						}}
						>
						{posts.map((val , key) => (
							<option onClick={() => {showBaseURL(val.base_url)}} key={key} className="selectOptions" value={val.base_url}>{val.organization_name}</option>
						))}
						
						</Select>
					</FormControl>
	  			<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16"
					aria-label="LOG IN"
					disabled={!isFormValid}
					value="legacy"
					// component={Link}
					// to="/apps/e-commerce/products"
					// role="button"
				>
					Login
				</Button>
			</Formsy>
		</div>
	);
}

const mapStateToProps = state => {
console.log(state)
	return {
		loginData: state.auth,
		newUser: state.newUserReducer.user
	}
}

export default connect(mapStateToProps)(JWTLoginTab);