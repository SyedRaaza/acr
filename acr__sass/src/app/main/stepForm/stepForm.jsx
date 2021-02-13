import React, { useState , useEffect , useRef } from 'react';
import {Button , Icon ,TextField , FormControl , Select , Typography , InputLabel} from "@material-ui/core";
import ReactTagInput from "@pathofdev/react-tag-input";
import FuseAnimate from '@fuse/core/FuseAnimate';
import { makeStyles } from '@material-ui/core/styles';
import "@pathofdev/react-tag-input/build/index.css";
import "../../../styles/assesInfoForm.scss";
import {Link} from "react-router-dom";

const MasterForm = () => {

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
        newPassword:"",
        confirmPassword: ""
    });
    const [show ,setShow] = useState(0);
  
    const handleChange = event => {
      const name = event.target.name;
        setFormValues({
            ...formValues,
            [name]: event.target.value
        });   
    }

    const handleChangeTag = newTag => {
        setTags(newTag)
        formValues.department=[];
        formValues.department.push(newTag)
      }
     
    const handleSubmit = event => {
      event.preventDefault()
      const { username , email } = formValues
      console.log(formValues)
      console.log(tags)
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
  
  const NextButton = () => {
    if(currentStep <2){
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
            <span className="sm:flex">Next</span>
        </Button>       
      )
    }
    return null;
  }

  const SubmitButton = () => {
      if (currentStep == 2) {
          return (
            <Button
            to=""
            className="whitespace-nowrap mt-8"
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            type="button"
            // style={{marginTop: "2rem"}}
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

  const handleNextEmail = (val) => {
    setShow(val)
  }
      return (
        <React.Fragment>
            <div className="stepForm">
                <form onSubmit={handleSubmit}>
                {/* 
                    render the form steps and pass required props in
                */}
                    <Step1 
                    currentStep={currentStep} 
                    handleChange={handleChangeTag}
                    email={formValues.email}
                    tags={tags}
                    />
                    <Step2 
                    currentStep={currentStep} 
                    handleChange={handleChange}
                    email1={formValues.email1}
                    email2={formValues.email2}
                    email3={formValues.email3}
                    email4={formValues.email4}
                    email5={formValues.email5}
                    show={show}
                    handleNextEmail={handleNextEmail}
                    />
                    <Step3
                    currentStep={currentStep}
                    newPassword={formValues.newPassword}
                    confirmPassword={formValues.confirmPassword}
                    handleChange={handleChange}
                    />
                    <div className="nxtPrv flex items-center justify-between">
                        <PreviousButton />
                        <NextButton />
                        <SubmitButton />
                    </div>
                </form>
            </div>
        </React.Fragment>
      );
    }

  export default React.memo(MasterForm);
  
  function Step1(props) {
    if (props.currentStep !== 0) {
      return null
    } 
    return(
      <div className="form-group formStepOne">
        <FuseAnimate animation="transition.slideRightIn" delay={300}>
            <Typography
                className="flex items-center"
                component=""
                role="button"
                to="/apps/e-commerce/products"
                color="inherit"
            >
                <span className="mx-4">Add Department</span>
            </Typography>
        </FuseAnimate>
        <ReactTagInput 
            tags={props.tags}
            placeholder="Enter Department Name and Press Enter"
            editable="true"
            removeOnBackspace="true"
            onChange={props.handleChange}
            className="ml-24 raza"
            style={{marginLeft: "20px"}}
        />
      </div>
    );
  }
  
  function Step2({show , currentStep , handleChange , username , email1 , email2 , email3 , email4 , email5 , handleNextEmail}) {

    const [select, setSelect] = useState({
        policy: '',
        implemented: '',
        automated: '',
        report: ''
      });
    const handleChangeSelect = (event) => {
        console.log(select)
        const name = event.target.name;
        setSelect({
          ...select,
          [name]: event.target.value,
        });
        console.log(select)
      };

      //console.log(props)
    if (currentStep !== 1) {
      return null
    } 
    return(
        <React.Fragment>
            <div className="form-group formStepTwo">
                <div className="invitesHeader flex items-center justify-between">
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Typography
                        className="flex items-center sm:mb-2"
                        component=""
                        role="button"
                        to=""
                        color="inherit"
                    >
                        <span className="mx-4">Invite Members</span>
                    </Typography>
                </FuseAnimate>
                    
                        <Icon
                        to=""
                        type="button"
                        className="whitespace-nowrap mb-10 cursor-pointer"
                        variant="contained"
                        color="secondary"
                        onClick={() => {let nextEmail = show + 1 ; handleNextEmail(nextEmail)}}
                        style={{marginTop: "2rem"}}
                        disabled={show > 4 ? true : false}
                        color="primary">
                          add_circle
                        </Icon>
                    
                </div>
                <div className="formStepTwo--fields grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-16 sm:gap-4 items-center ">
                <TextField
                        id="email1"
                        label="Email1"
                        type="text"
                        autoComplete=""
                        variant="outlined"
                        name="email1"
                        value={email1}
                        onChange={handleChange}
                        className="sm:my-10 lg:my-10"
                        helperText={""}
                        color="inherit"
                        validations="isEmail"
                        validationErrors={{
                            isEmail: 'Please enter a valid email'
                        }}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                      native
                      value={select.policy}
                      onChange={handleChangeSelect}
                      label="Assign Role"
                      inputProps={{
                        name: 'policy',
                        id: 'policy-controlled',
                      }}
                    >
                        <option className="selectOptions" value='one'>Admin</option>
                        <option className="selectOptions" value='two'>Reviewer</option>
                        <option className="selectOptions" value='three'>Internal</option>
                        <option className="selectOptions" value='four'>Temporary</option>
            
                      
                    </Select>
                  </FormControl>
                <TextField
                        id="email2"
                        label="Email2"
                        type="text"
                        autoComplete=""
                        variant="outlined"
                        name="email2"
                        value={email2}
                        onChange={handleChange}
                        style={{display: show < 1 ? "none" : null}}
                        className="sm:my-10 lg:my-2"
                />
                <FormControl variant="outlined" style={{display: show < 1 ? "none" : null}}>
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                        native
                        value={select.policy}
                        onChange={handleChangeSelect}
                        label="Assign Role"
                        inputProps={{
                        name: 'policy',
                        id: 'policy-controlled',
                        }}
                    >
                        <option className="selectOptions" value='one'>Admin</option>
                        <option className="selectOptions" value='two'>Reviewer</option>
                        <option className="selectOptions" value='three'>Internal</option>
                        <option className="selectOptions" value='four'>Temporary</option>
            
                        
                    </Select>
                </FormControl>
                <TextField
                        id="email3"
                        label="Email3"
                        type="text"
                        autoComplete=""
                        variant="outlined"
                        name="email3"
                        value={email3}
                        onChange={handleChange}
                        style={{display: show < 2 ? "none" : null}}
                        className="sm:my-10 lg:my-2"
                />
                <FormControl variant="outlined" style={{display: show < 2 ? "none" : null}}>
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                        native
                        value={select.policy}
                        onChange={handleChangeSelect}
                        label="Assign Role"
                        inputProps={{
                        name: 'policy',
                        id: 'policy-controlled',
                        }}
                    >
                        <option className="selectOptions" value='one'>Admin</option>
                        <option className="selectOptions" value='two'>Reviewer</option>
                        <option className="selectOptions" value='three'>Internal</option>
                        <option className="selectOptions" value='four'>Temporary</option>
            
                        
                    </Select>
                </FormControl>
                <TextField
                        id="email4"
                        label="Email4"
                        type="text"
                        autoComplete=""
                        variant="outlined"
                        name="email4"
                        value={email4}
                        onChange={handleChange}
                        style={{display: show < 3 ? "none" : null}}
                        className="sm:my-10 lg:my-2"
                />
                <FormControl variant="outlined" style={{display: show < 3 ? "none" : null}}>
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                        native
                        value={select.policy}
                        onChange={handleChangeSelect}
                        label="Assign Role"
                        inputProps={{
                        name: 'policy',
                        id: 'policy-controlled',
                        }}
                    >
                        <option className="selectOptions" value='one'>Admin</option>
                        <option className="selectOptions" value='two'>Reviewer</option>
                        <option className="selectOptions" value='three'>Internal</option>
                        <option className="selectOptions" value='four'>Temporary</option>
            
                        
                    </Select>
                </FormControl>
                <TextField
                        id="email5"
                        label="Email5"
                        type="text"
                        autoComplete=""
                        variant="outlined"
                        name="email5"
                        value={email5}
                        onChange={handleChange}
                        style={{display: show < 4 ? "none" : null}}
                        className="sm:my-10 lg:my-2"
                />
                <FormControl variant="outlined" style={{display: show < 4 ? "none" : null}}>
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                        native
                        value={select.policy}
                        onChange={handleChangeSelect}
                        label="Assign Role"
                        inputProps={{
                        name: 'policy',
                        id: 'policy-controlled',
                        }}
                    >
                        <option className="selectOptions" value='one'>Admin</option>
                        <option className="selectOptions" value='two'>Reviewer</option>
                        <option className="selectOptions" value='three'>Internal</option>
                        <option className="selectOptions" value='four'>Temporary</option>
            
                        
                    </Select>
                </FormControl>
                </div>
            </div>
        </React.Fragment>
    );
  }

  const Step3 = ({currentStep , newPassword , confirmPassword ,handleChange}) => {
      if (currentStep !== 2) {
          return null
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
                <TextField 
                id="newPassword"
                label="Enter New Password"
                type="password"
                variant="outlined"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
                className="w-full"
                />
                <TextField 
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                className="w-full my-10"
                />
          </React.Fragment>
      )
  }