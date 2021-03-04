import React, { useState , useEffect , useRef } from 'react';
import {Button , Icon , FormControl , Select , Typography , InputLabel} from "@material-ui/core";
import ReactTagInput from "@pathofdev/react-tag-input";
import FuseAnimate from '@fuse/core/FuseAnimate';
import { makeStyles } from '@material-ui/core/styles';
import "@pathofdev/react-tag-input/build/index.css";
import "../../../../../styles/assesInfoForm.scss";
import {Link} from "react-router-dom";
import { TextFieldFormsy } from '@fuse/core/formsy';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect, useDispatch , useSelector} from 'react-redux';
import Formsy from 'formsy-react';
import userServices from 'app/services/backendAPI/userServices';


var members = [];


const MasterForm = ({newUSER}) => {

    const [tags, setTags] = useState([]);
    const [currentStep , setCurrentStep] = useState(0);
    const [formValues , setFormValues] = useState({
        department:[],
        email:"",
        email1:"",
        email2:"",
        email3:"",
        email4:"",
        email5:"",
        f_name1:"",
        l_name1:"",
        f_name2:"",
        l_name2:"",
        f_name3:"",
        l_name3:"",
        f_name4:"",
        l_name4:"",
        f_name5:"",
        l_name5:"",
        newPassword:"",
        confirmPassword:"",
        role1:"",
    });

    

    const [memberOne , setmemberOne] = useState({});
    const [memberTwo , setmemberTwo] = useState({});
    const [memberThree , setmemberThree] = useState({});
    const [memberFour , setmemberFour] = useState({});
    const [memberFive , setmemberFive] = useState({});
    const [show ,setShow] = useState(0);
    const [password , setPassword] = useState({})
  
    const handleChange = event => {
      const name = event.target.name;
        setFormValues({
            ...formValues,
            [name]: event.target.value
        });   
    }


    const handleChangePassword = event => {
      const name = event.target.name;
        setPassword({
            [name]: event.target.value
        });  
        console.log(password) 
    }


    //handle for submit Members
    const handleSubmitMembers = () => {
      userServices.inviteMembers(members);
    }

    //Handle for ResetPassword
    const handleResetPassword = () => {
      userServices.resetPassword(newUSER.email , password.password)
    };

     
    const handleSubmit = event => {
      // event.preventDefault()
      // const { username , email } = formValues
      // console.log(formValues)
      console.log(formValues)
    }
    
    const _next = () => {
      const newCurrentStep = currentStep >= 1? 2: currentStep + 1
      setCurrentStep(newCurrentStep)
    }
      
    const _prev = () => {
      const newCurrentStep = currentStep <= 0? 0: currentStep - 1
      setCurrentStep(newCurrentStep);
    }
  
  const PreviousButton = () => {
    if(currentStep !==0){
      return (
        <Button
            to=""
            className="whitespace-nowrap mt-8"
            variant="contained"
            color="secondary"
            onClick={_prev}
            type="button"
            //style={{marginTop: "2rem"}}
        >
            <span className="sm:flex">Previous</span>
        </Button>  
      )
    }
    return null;
  }
  

  const SkipButton = () => {
    if(currentStep == 1){
      return (
        <Button
            to=""
            className="whitespace-nowrap mt-8"
            variant="contained"
            color="secondary"
            onClick={_next}
            type="button"
            //style={{marginTop: "2rem"}}
        >
            <span className="sm:flex">Skip</span>
        </Button>  
      )
    }
    return null;
  }

  const SubmitButton = () => {
      if (currentStep == 0) {
          return (
            <Button
            to=""
            className="whitespace-nowrap mt-8"
            variant="contained"
            color="secondary"
            onClick={() => {
              handleSubmit();
              handleResetPassword()
            }}
            type="button"
            >
                <Link className="font-medium finishBtn" to="/apps/dashboards/analytics">
                    <span>Finish</span>
				        </Link>
                <span className="sm:flex"></span>
            </Button>
        )
      }
      return null;
  }

      return (
        <React.Fragment>
            <div className="stepForm">
                
                <form onSubmit={handleSubmit}>
                {/* 
                    render the form steps and pass required props in
                */}
                    <Step3
                    currentStep={currentStep}
                    newPassword={formValues.password}
                    confirmPassword={formValues.confirm_password}
                    handleChange={handleChange}
                    handleChangePassword={handleChangePassword}
                    />
                    <div className="nxtPrv flex items-center justify-between">
                        <PreviousButton />
                        <SkipButton />
                        <SubmitButton />
                    </div>
                </form>
            </div>
        </React.Fragment>
      );
    }

    const mapStateToProps = state => {
      console.log(state)
        return {
            newUSER: state.newUserReducer.user.data[0]
        }
    }

  export default connect(mapStateToProps)(React.memo(MasterForm));
  

  export const Step3 = ({currentStep , newPassword , confirmPassword ,handleChange ,handleChangePassword}) => {
      const [passLength , setPassLength] = useState(8);
      const formRef = useRef(null);
      const [showPassword, setShowPassword] = useState(false);
      if (currentStep !== 0) {
          return null
      }
      
      const checkConfirmPass = () => {
        if (newPassword != confirmPassword) {
          setPassLength(100)
        }
        else {setPassLength(8);}
      }
      
      return (
          <React.Fragment>
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Typography
                        className="flex items-center sm:mb-12"
                        component=""
                        role="button"
                        to="/apps/e-commerce/products"
                        color="inherit"
                    >
                        <span className="mx-4">Reset Your Password</span>
                    </Typography>
                </FuseAnimate>
                <div className="formStepThree">

                <Formsy
                    ref={formRef}
                    className="grid lg:grid-cols-1 sm:grid-cols-1 gap-12 lg:gap-16 sm:gap-12 items-center w-full"
                  >
                <TextFieldFormsy
                  //className="mb-16"
                  type="password"
                  name="password"
                  label="Enter New Password"
                  value=""
                  onChange={(e) => {
                    handleChange(e);
                    handleChangePassword(e);
                  }}
                  validations={{
                    minLength: 8
                  }}
                  validationErrors={{
                    minLength: 'Min character length is 8'
                  }}
                  InputProps={{
                    className: 'pr-2',
                    type: showPassword ? 'text' : 'password',
                    onKeyUp : () => {checkConfirmPass()},
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
                <TextFieldFormsy
                  //className="mb-16"
                  type="password"
                  name="confirm_password"
                  label="Confirm Password"
                  value=""
                  onChange={handleChange}
                 // onChange={checkConfirmPass}
                 // error={true}
                  validations={{
                    minLength: passLength
                  }}
                  validationErrors={{
                    minLength: 'Password does not match to new password'
                  }}
                  InputProps={{
                    className: 'pr-2',
                    type: showPassword ? 'text' : 'password',
                    onKeyUp : () => {checkConfirmPass()},
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
                </Formsy>
                </div>
          </React.Fragment>
      )
  }