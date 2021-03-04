import React, { useState , useEffect } from 'react';
import FuseHighlight from '@fuse/core/FuseHighlight';
import {useSelector , useDispatch} from "react-redux";
import { useTheme , makeStyles } from '@material-ui/core/styles';
import {Button , Typography} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
//import {Step3} from "../../../stepForm/stepForm";
import MasterForm from "./changePassword";

function InstallationDoc() {

	const theme = useTheme();
	const userData = useSelector(state => state.newUserReducer.user.data[0]);
	const [disabled , setDisabled] = useState(true);
	const [open, setOpen] = useState(false);
	const [input , setInput] = useState({
		first_name: userData.first_name,
		last_name: userData.last_name,
		type: userData.type,
		email: userData.email
	  });


	const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
		margin: theme.spacing(1),
		width: '100%',
		},
	},
	}));
	const classes = useStyles();

	const handleChangeInput = event => {
	const name = event.target.name;
	setInput({
		...input,
		[name]: event.target.value
	});
	}

	const handleOpen = () => {
	setOpen(true);
	};
	
	const handleClose = () => {
	setOpen(false);
	};

	useEffect(() => {

	} , [userData])

	return (
		<>
		<div className="w-full flex justify-between items-center p-8 pr-0">
			<Typography className="text-base font-bold">
				User Profile
			</Typography>
			<Button
			//component={Link}
			to=""
			className="whitespace-nowrap -mr-8"
			variant="contained"
			color="secondary"
			onClick={() => {setDisabled(false)}}
			>Edit</Button>
		</div>
		<form className={classes.root} Validate autoComplete="off">    
            <div className="w-full flex sm:block md:flex lg:flex items-center justify-between">
              <TextField
                  id="first_name"
                  label="First Name"
                  type="text"
                  autoComplete=""
                  variant="outlined"
                  name="first_name"
                  value={input.first_name}
				  onChange={handleChangeInput}
				  disabled={disabled}
              />
			  <div className="w-full" style={{marginRight: "-8px !important"}}>
              <TextField
                  id="last_name"
                  label="Last Name"
                  type="text"
                  autoComplete=""
                  variant="outlined"
                  name="last_name"
                  value={input.last_name}
                  onChange={handleChangeInput}
				  disabled={disabled}
                  className="-mr-2"
                  className="assessment__date assessment__from"
              />
			  </div>
            </div>
			<TextField
                id="email"
                label="Email"
                type="text"
                autoComplete=""
                variant="outlined"
                name="email"
                value={input.email}
				onChange={handleChangeInput}
				disabled={disabled}
            />
            <TextField
                id="type"
                label="Type"
                type="text"
                autoComplete=""
                variant="outlined"
                name="type"
                value={input.type}
                onChange={handleChangeInput}
				disabled={disabled}
            />
            <div className="buttonNext">
                <button type="submit" disabled style={{display: "none"}} aria-hidden="true"></button>
                <Button
                    to=""
                    className="whitespace-nowrap"
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {e.preventDefault()}}
                    type="submit"
                >
                    <span className="sm:flex w-full"onClick={handleOpen}>Change Password</span>
                </Button>
            </div>
        </form>

		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				className="bd-white modalForm"
				disableBackdropClick="true"
			>
				<MasterForm />
			</Modal>
		</div>



		</>
	);
}



export default InstallationDoc;
