import React , {useState , useEffect} from 'react';
import { useTheme , makeStyles } from '@material-ui/core/styles';
import {Button , Typography} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {useSelector , useDispatch} from "react-redux";
import { setNewSettings } from 'app/store/fuse/settingsSlice';
import { fuseDark, skyBlue } from '@fuse/colors';
import { lightBlue, red } from '@material-ui/core/colors';
import {DropzoneArea} from 'material-ui-dropzone'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Divider} from "@material-ui/core";
import axios from "axios";

function Branding(props) {

    const dispatch = useDispatch();
    const settings = useSelector(({ fuse }) => fuse.settings.current);
    const theme = useTheme();
	const userData = useSelector(state => state.newUserReducer.user);
	const [disabled , setDisabled] = useState(true);
    const [logo , setLogo] = useState([]);
	const [input , setInput] = useState({
        type: "light",
        primary_light: "#0054da",
        primary_main: "#005ef4",
        primary_dark: "#287bff",
        secondary_light: skyBlue[100],
        secondary_main: skyBlue[500],
        secondary_dark: skyBlue[900],
        secondary_contrastText: "",
        background_paper: "#FFFFFF",
        background_default: "#f6f7f9",

	  });


       var customizeTheme = {
            palette: {
                type: input.type,
                primary: {
                    light: input.primary_light,
                    main: input.primary_main,
                    dark: input.primary_dark
                },
                secondary: {
                    light: input.secondary_light,
                    main: input.secondary_main,
                    dark: input.secondary_dark,
                    contrastText: input.secondary_contrastText
                },
                background: {
                    paper: input.background_paper,
                    default: input.background_default
                },
                error: red
            },
            status: {
                danger: 'yellow'
            }
        }

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

    const handleUploadFiles = files => {
        setLogo(files)
    }

    const handleUploadLogo = () => {
        let data = new FormData();
        data.append("logo" , logo[0] , logo[0].path)
        axios.post("/user/organization/update/" , data , { 
        headers: {
            'Content-Type': `multipart/form-data`,
        }
        })
        .then(res => console.log("Response"))
        .catch(err => console.log("Error"))
    }

    const handleColorSchemeRequest = () => {
        axios.post("/user/organization/update/" , {"color_schemes" : customizeTheme})
        .then(res => console.log("res"))
        .catch(req => console.log("req"))
    }

    return (
        <React.Fragment>
            <div className="w-full flex justify-between items-center p-8 pr-0">
                <Typography className="text-lg text-center color-base font-bold">
                    Branding
                </Typography>
            </div>
            <br />
            <div className="upload__logo">
                <Typography className="color-base font-bold">
                    Logo:
                </Typography>
                <br />
                <DropzoneArea 
                className="upload__logo--dropzone"
                acceptedFiles={['image/*']}
                filesLimit={1}
                dropzoneText={"Drag and Drop Image here or Upload"}
                onChange={handleUploadFiles} />
                <div className="text-center upload__logo--button">
                    <Button
                        to=""
                        className="whitespace-nowrap"
                        variant="contained"
                        color="secondary"
                        onClick={(e) => {e.preventDefault() ; handleUploadLogo()}}
                        type="submit"
                    >
                        <span className="sm:flex w-full">Upload</span>
                    </Button>
                </div>
            </div>
            <br />
            <form className={classes.root} Validate autoComplete="off">
                <Typography className="color-base font-bold">
                        Theme:
                </Typography> <br />
                <div className="controlContent--types__policy">
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Theme Mode</InputLabel>
                    <Select
                      native
                      value={input.type}
                      onChange={handleChangeInput}
                      label="Theme Mode"
                      inputProps={{
                        name: 'type',
                        id: 'type',
                      }}
                    >
                        <option className="selectOptions" value="light">Light</option>
                        <option className="selectOptions" value="dark">Dark</option>
                      
                    </Select>
                  </FormControl>
                </div>
                <br />
                <Divider />
                <br />
                <Typography className="color-base font-bold">
                        Primary:
                </Typography> <br />
                <div className="w-full grid gap-12 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
                <TextField
                    id="primary_light"
                    label="Light"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="primary_light"
                    value={input.primary_light}
                    onChange={handleChangeInput}
                />
                <TextField
                    id="primary_dark"
                    label="Dark"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="primary_dark"
                    value={input.primary_dark}
                    onChange={handleChangeInput}
                    className="-mr-2"
                    className="assessment__date assessment__from"
                />
                <TextField
                    id="primary_main"
                    label="Main"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="primary_main"
                    value={input.primary_main}
                    onChange={handleChangeInput}
                />
                </div> 
                <br /> 
                <Divider />
                <br />
                <Typography className="color-base font-bold">
                        Secondary:
                </Typography> <br />
                <div className="w-full grid gap-12 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
                <TextField
                    id="secondary_light"
                    label="Light"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="secondary_light"
                    value={input.secondary_light}
                    onChange={handleChangeInput}
                />
                <TextField
                    id="secondary_dark"
                    label="Dark"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="secondary_dark"
                    value={input.secondary_dark}
                    onChange={handleChangeInput}
                    className="-mr-2"
                    className="assessment__date assessment__from"
                />
                <TextField
                    id="secondary_main"
                    label="Main"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="secondary_main"
                    value={input.secondary_main}
                    onChange={handleChangeInput}
                />
                <TextField
                    id="secondary_contrast_text"
                    label="Text Color"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="secondary_contrastText"
                    value={input.secondary_contrastText}
                    onChange={handleChangeInput}
                />
                </div>
                <br />
                <Divider />
                <br />
                <Typography className="color-base font-bold">
                        Background:
                </Typography> <br />
                <div className="w-full grid gap-12 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
                <TextField
                    id="background_paper"
                    label="Paper"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="background_paper"
                    value={input.background_paper}
                    onChange={handleChangeInput}
                />
                <TextField
                    id="background_default"
                    label="Default Color"
                    type="color"
                    autoComplete=""
                    variant="outlined"
                    name="background_default"
                    value={input.background_default}
                    onChange={handleChangeInput}
                    className="-mr-2"
                    className="assessment__date assessment__from"
                />
                </div>
                <div className="buttonNext">
                    <button type="submit" disabled style={{display: "none"}} aria-hidden="true"></button>
                    <Button
                        to=""
                        className="whitespace-nowrap"
                        variant="contained"
                        color="secondary"
                        onClick={(e) => {e.preventDefault() ; handleSchemeSelect("TenantTheme") ; handleColorSchemeRequest() }}
                        type="submit"
                    >
                        <span className="sm:flex w-full">Submit</span>
                    </Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default Branding;