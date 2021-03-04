import React , {useState , useEffect , useRef} from "react";
import {Button , Icon , FormControl , Select , Typography , InputLabel} from "@material-ui/core";
import ReactTagInput from "@pathofdev/react-tag-input";
import FuseAnimate from '@fuse/core/FuseAnimate';
import { makeStyles } from '@material-ui/core/styles';
import "@pathofdev/react-tag-input/build/index.css";
import "../../../styles/assesInfoForm.scss";
import {Link} from "react-router-dom";
import { TextFieldFormsy } from '@fuse/core/formsy';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect, useDispatch , useSelector} from 'react-redux';
import Formsy from 'formsy-react';
import userServices from 'app/services/backendAPI/userServices';

const Step3 = ({currentStep , newPassword , confirmPassword ,handleChange ,handleChangePassword}) => {
    const [passLength , setPassLength] = useState(8);
    const formRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    if (currentStep !== 2) {
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

export default Step3;