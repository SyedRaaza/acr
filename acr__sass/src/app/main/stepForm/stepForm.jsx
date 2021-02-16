import React, { useState , useEffect , useRef } from 'react';
import {Button , Icon ,TextField , FormControl , Select , Typography , InputLabel} from "@material-ui/core";
import ReactTagInput from "@pathofdev/react-tag-input";
import FuseAnimate from '@fuse/core/FuseAnimate';
import { makeStyles } from '@material-ui/core/styles';
import "@pathofdev/react-tag-input/build/index.css";
import "../../../styles/assesInfoForm.scss";
import {Link} from "react-router-dom";
import { TextFieldFormsy } from '@fuse/core/formsy';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch } from 'react-redux';
import Formsy from 'formsy-react';


var members = [];


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
    const chkSts = {name:'raza'}
  
    const handleChange = event => {
      const name = event.target.name;
        setFormValues({
            ...formValues,
            [name]: event.target.value
        });   
        // formValues.members=[]
        // formValues.members.push({[name]:event.target.value})
    }

    const handleChange1 = event => {
      const name = event.target.name;
        setmemberOne({
            ...memberOne,
            [name]: event.target.value
        });   
        // formValues.members=[]
        // formValues.members.push({[name]:event.target.value})
    }

    const handleChange2 = event => {
      const name = event.target.name;
        setmemberTwo({
            ...memberTwo,
            [name]: event.target.value
        });   
        // formValues.members=[]
        // formValues.members.push({[name]:event.target.value})
    }

    const handleChange3 = event => {
      const name = event.target.name;
        setmemberThree({
            ...memberThree,
            [name]: event.target.value
        });   
        // formValues.members=[]
        // formValues.members.push({[name]:event.target.value})
    }

    const handleChange4 = event => {
      const name = event.target.name;
        setmemberFour({
            ...memberFour,
            [name]: event.target.value
        });   
        // formValues.members=[]
        // formValues.members.push({[name]:event.target.value})
    }


    const handleChange5 = event => {
      const name = event.target.name;
        setmemberFive({
            ...memberFive,
            [name]: event.target.value
        });   
        // formValues.members=[]
        // formValues.members.push({[name]:event.target.value})
    }

    const handleFormValuesSave = () => {
      //console.log(show)
      if(show == 0) {
        //let currentForm = checkForm;
        members = []
        members.push(memberOne);
        //members.shift()
        console.log(show +"form1")
      }
      else if (show == 1) {
        //let currentForm = checkForm
        members = []
        members.push(memberOne , memberTwo)
        //members.shift()
       // members.push(chkSts)
        console.log(show +"form2")
      }
      else if (show == 2) {
        members = []
        members.push(memberOne , memberTwo , memberThree)
        console.log(show +"form3")
      }
      else if (show == 3) {
        members = []
        members.push(memberOne,memberTwo,memberThree,memberFour)
      }
      else if (show == 4) {
        members = []
        members.push(memberOne,memberTwo,memberThree,memberFour , memberFive)
      }
    }

    const handleChangeTag = newTag => {
        setTags(newTag)
        formValues.department=[];
        formValues.department.push(newTag)
      }
     
    const handleSubmit = event => {
      // event.preventDefault()
      // const { username , email } = formValues
      // console.log(formValues)
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
            onClick={() => {
              _next();
              handleFormValuesSave()
            }}
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
            onClick={() => {
              handleSubmit();
              console.log(members)
            }}
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
                    handleChange1={handleChange1}
                    handleChange2={handleChange2}
                    handleChange3={handleChange3}
                    handleChange4={handleChange4}
                    handleChange5={handleChange5}
                    formValues
                    show={show}
                    handleNextEmail={handleNextEmail}
                    handleSave={handleFormValuesSave}
                    />
                    <Step3
                    currentStep={currentStep}
                    newPassword={formValues.password}
                    confirmPassword={formValues.confirm_password}
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
  
  function Step2({
    show , 
    currentStep , 
    handleChange , 
    handleChange1,
    handleChange2,
    handleChange3,
    handleChange4,
    handleChange5,
    username , 
    email1 , 
    email2 , 
    email3 , 
    email4 , 
    email5 , 
    handleNextEmail,
    f_name1,
    l_name1,
    f_name2,
    l_name2,
    f_name3,
    l_name3,
    f_name4,
    l_name4,
    f_name5,
    l_name5,
    handleSave,
    role1
  }) {

    const [select, setSelect] = useState({
        policy: '',
        implemented: '',
        automated: '',
        report: ''
      });
    const formRef = useRef(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();


    const handleChangeSelect = (event) => {
        console.log(select)
        const name = event.target.name;
        setSelect({
          ...select,
          [name]: event.target.value,
        });
        console.log(select)
      };


    function disableButton() {
      setIsFormValid(false);
    }
  
    function enableButton() {
      setIsFormValid(true);
    }
  
    function handleSubmit(model) {
      //dispatch(submitLogin(model));
      console.log(model)
    }

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
                        onClick={() => {let nextEmail = show + 1 ; handleNextEmail(nextEmail);console.log(show)}}
                        style={{marginTop: "2rem"}}
                        disabled={show > 4 ? true : false}
                        color="primary">
                          add_circle
                        </Icon>
                    
                </div>
                <div className="formStepTwo--fields  ">
                <Formsy
                    onValidSubmit={handleSubmit}
                    onValid={enableButton}
                    onInvalid={disableButton}
                    ref={formRef}
                    className="grid lg:grid-cols-1 sm:grid-cols-1 gap-8 sm:gap-4 lg:gap-16 items-center w-full"
                  >
                  <div className="member1 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-16 sm:gap-8 items-center w-full">
                    <Typography 
                    className="lg:col-span-2 sm:col-span-1"
                    color="inherit"
                    >
                      Member-1
                    </Typography>
                    <TextFieldFormsy
                      id="f_name1"
                      className=""
                      type="text"
                      name="first_name"
                      label="First Name"
                      value={f_name1}
                      onChange={handleChange1}
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
                              person-outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />

                    <TextFieldFormsy
                      className=""
                      id="l_name1"
                      type="text"
                      name="last_name"
                      label="Last Name"
                      value={l_name1}
                      onChange={handleChange1}
                      validations={{
                        minLength: 4
                      }}
                      validationErrors={{
                        minLength: 'Min character length is 4'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                person-outline
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <TextFieldFormsy
                      className=""
                      id="email1"
                      type="text"
                      name="email"
                      label="Email"
                      value={email1}
                      onChange={handleChange1}
                      validations="isEmail"
                      validationErrors={{
                        isEmail: 'Please enter a valid email'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                email
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                      native
                      name="role"
                      //value={role1}
                      onChange={handleChange1}
                      label="Assign Role"
                      inputProps={{
                        name: 'role_1',
                        id: 'policy-controlled',
                      }}
                    >
                        <option className="selectOptions" value='admin'>Admin</option>
                        <option className="selectOptions" value='reviewer'>Reviewer</option>
                        <option className="selectOptions" value='internal'>Internal</option>
                        <option className="selectOptions" value='temporary'>Temporary</option>
                      
                    </Select>
                  </FormControl>
                  </div>
                  <div className="member2 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-16 sm:gap-8 items-center w-full" style={{display: show < 1 ? "none" : null}}>
                  <Typography 
                    className="lg:col-span-2 sm:col-span-1"
                    color="inherit"
                    >
                      Member-2
                    </Typography>
                  <TextFieldFormsy
                      className=""
                      id="f_name2"
                      type="text"
                      name="first_name2"
                      label="First Name"
                      value={f_name2}
                      onChange={handleChange2}
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
                              person-outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />

                    <TextFieldFormsy
                      className=""
                      id="l_name2"
                      type="text"
                      name="last_name2"
                      label="Last Name"
                      value={l_name2}
                      onChange={handleChange2}
                      validations={{
                        minLength: 4
                      }}
                      validationErrors={{
                        minLength: 'Min character length is 4'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                person-outline
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <TextFieldFormsy
                      className=""
                      id="email2"
                      type="text"
                      name="email2"
                      label="Email"
                      value={email2}
                      onChange={handleChange2}
                      validations="isEmail"
                      validationErrors={{
                        isEmail: 'Please enter a valid email'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                email
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                      native
                      name="role2"
                      value=""
                      onChange={handleChange2}
                      label="Assign Role"
                      inputProps={{
                        name: 'role_2',
                        id: 'policy-controlled',
                      }}
                    >
                        <option className="selectOptions" value='admin'>Admin</option>
                        <option className="selectOptions" value='reviewer'>Reviewer</option>
                        <option className="selectOptions" value='internal'>Internal</option>
                        <option className="selectOptions" value='temporary'>Temporary</option>
                      
                    </Select>
                  </FormControl>
                  </div>
                  <div className="member2 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-16 sm:gap-8 items-center w-full" style={{display: show < 2 ? "none" : null}}>
                  <Typography 
                    className="lg:col-span-2 sm:col-span-1"
                    color="inherit"
                    >
                      Member-3
                    </Typography>
                  <TextFieldFormsy
                      className=""
                      id="f_name3"
                      type="text"
                      name="first_name3"
                      label="First Name"
                      value={f_name3}
                      onChange={handleChange3}
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
                              person-outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />

                    <TextFieldFormsy
                      className=""
                      id="l_name3"
                      type="text"
                      name="last_name3"
                      label="Last Name"
                      value={l_name3}
                      onChange={handleChange3}
                      validations={{
                        minLength: 4
                      }}
                      validationErrors={{
                        minLength: 'Min character length is 4'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                person-outline
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <TextFieldFormsy
                      className=""
                      id="email3"
                      type="text"
                      name="email3"
                      label="Email"
                      value={email3}
                      onChange={handleChange3}
                      validations="isEmail"
                      validationErrors={{
                        isEmail: 'Please enter a valid email'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                email
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                      native
                      name="role3"
                      value=""
                      onChange={handleChange3}
                      label="Assign Role"
                      inputProps={{
                        name: 'role_3',
                        id: 'policy-controlled',
                      }}
                    >
                        <option className="selectOptions" value='admin'>Admin</option>
                        <option className="selectOptions" value='reviewer'>Reviewer</option>
                        <option className="selectOptions" value='internal'>Internal</option>
                        <option className="selectOptions" value='temporary'>Temporary</option>
                      
                    </Select>
                  </FormControl>
                  </div>
                  <div className="member2 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-16 sm:gap-8 items-center w-full" style={{display: show < 3 ? "none" : null}}>
                  <Typography 
                    className="lg:col-span-2 sm:col-span-1"
                    color="inherit"
                    >
                      Member-4
                    </Typography>
                  <TextFieldFormsy
                      className=""
                      id="f_name4"
                      type="text"
                      name="first_name4"
                      label="First Name"
                      value={f_name4}
                      onChange={handleChange4}
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
                              person-outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />

                    <TextFieldFormsy
                      className=""
                      id="l_name4"
                      type="text"
                      name="last_name4"
                      label="Last Name"
                      value={l_name4}
                      onChange={handleChange4}
                      validations={{
                        minLength: 4
                      }}
                      validationErrors={{
                        minLength: 'Min character length is 4'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                person-outline
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <TextFieldFormsy
                      className=""
                      id="email4"
                      type="text"
                      name="email4"
                      label="Email"
                      value={email4}
                      onChange={handleChange4}
                      validations={{
                        minLength: 4
                      }}
                      validationErrors={{
                        minLength: 'Min character length is 4'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                email
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                      native
                      name="role3"
                      value=""
                      onChange={handleChange4}
                      label="Assign Role"
                      inputProps={{
                        name: 'role_4',
                        id: 'policy-controlled',
                      }}
                    >
                        <option className="selectOptions" value='admin'>Admin</option>
                        <option className="selectOptions" value='reviewer'>Reviewer</option>
                        <option className="selectOptions" value='internal'>Internal</option>
                        <option className="selectOptions" value='temporary'>Temporary</option>
                      
                    </Select>
                  </FormControl>
                  </div>
                  <div className="member2 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-16 sm:gap-8 items-center w-full" style={{display: show < 4 ? "none" : null}}>
                  <Typography 
                    className="lg:col-span-2 sm:col-span-1"
                    color="inherit"
                    >
                      Member-5
                    </Typography>
                  <TextFieldFormsy
                      className=""
                      id="f_name5"
                      type="text"
                      name="first_name5"
                      label="First Name"
                      value={f_name5}
                      onChange={handleChange5}
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
                              person-outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />

                    <TextFieldFormsy
                      className=""
                      id="l_name5"
                      type="text"
                      name="last_name5"
                      label="Last Name"
                      value={l_name5}
                      onChange={handleChange5}
                      validations={{
                        minLength: 4
                      }}
                      validationErrors={{
                        minLength: 'Min character length is 4'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                person-outline
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <TextFieldFormsy
                      className=""
                      id="email5"
                      type="text"
                      name="email5"
                      label="Email"
                      value={email5}
                      onChange={handleChange5}
                      validations="isEmail"
                      validationErrors={{
                        isEmail: 'Please enter a valid email'
                      }}
                      InputProps={{
                        className: 'pr-2',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <Icon className="text-20" color="action">
                                email
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      variant="outlined"
                      required
                    />
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Assign Role</InputLabel>
                    <Select
                      native
                      name="role5"
                      value=""
                      onChange={handleChange5}
                      label="Assign Role"
                      inputProps={{
                        name: 'role5',
                        id: 'policy-controlled',
                      }}
                    >
                        <option className="selectOptions" value='admin'>Admin</option>
                        <option className="selectOptions" value='reviewer'>Reviewer</option>
                        <option className="selectOptions" value='internal'>Internal</option>
                        <option className="selectOptions" value='temporary'>Temporary</option>
                      
                    </Select>
                  </FormControl>
                  </div>
                  </Formsy>
                </div>
            </div> 
        </React.Fragment>
    );
  }

  const Step3 = ({currentStep , newPassword , confirmPassword ,handleChange}) => {
      const [passLength , setPassLength] = useState(8);
      const formRef = useRef(null);
      const [showPassword, setShowPassword] = useState(false);
      if (currentStep !== 2) {
          return null
      }
      
      const checkConfirmPass = () => {
        if (newPassword != confirmPassword) {
          setPassLength(100)
          console.log("8")
          console.log(passLength)
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
                  onChange={handleChange}
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