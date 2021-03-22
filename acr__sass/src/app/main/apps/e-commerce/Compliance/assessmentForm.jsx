import React , {useState , useEffect} from 'react';
import {connect , useDispatch, useSelector} from "react-redux";
import TextField from '@material-ui/core/TextField';
import {Button , Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ReactTagInput from "@pathofdev/react-tag-input";
import 'date-fns';
import "@pathofdev/react-tag-input/build/index.css";
import "../../../../../styles/assesInfoForm.scss";
import { getISOData } from '../../../../store/redux/index';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));


const AssesmentInfoFormCOMPLIANCE = ({changeTab , nextTab , handleEnableTabs , userData }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const ComplianceFormData = useSelector(state => state.isoSingleAssessmentReducer.isoAssessmentSingle);
  const [input , setInput] = useState({
    name: "",
    period_to: "2020-01-26",
    period_from: "2020-01-01",
    departments: [],
    owner_id: 1,
  });
  const handleChangeInput = event => {
    const name = event.target.name;
    setInput({
        ...input,
        [name]: event.target.value
    });
    console.log(input);
  }

  const handleChangeTag = newTag => {
    setTags(newTag)
    input.departments = [];
    input.departments = newTag ;
  }

  useEffect(() => {
    
  },[ComplianceFormData])


  const postAssessmentData = () => {
    dispatch(getISOData(input))
  }
  return(
    <div>
        <form className={classes.root} Validate autoComplete="off">    
            <TextField
                id="name-input"
                label="Name"
                type="text"
                autoComplete=""
                variant="outlined"
                name="name"
                value={ComplianceFormData.name === undefined ? input.name : ComplianceFormData.name}
                onChange={handleChangeInput}
                disabled={ComplianceFormData.length == 0 ? false : true}
            />
            <div className="w-full flex items-center justify-between">
              <TextField
                  id="period-input"
                  label="From"
                  type="date"
                  autoComplete=""
                  variant="outlined"
                  name="period_from"
                  value={ComplianceFormData.period_from === undefined ? input.period_from : ComplianceFormData.period_from}
                  onChange={handleChangeInput}
                  className="assessment__date"
                  disabled={ComplianceFormData.length == 0 ? false : true}
              />
              <TextField
                  id="period-input"
                  label="To"
                  type="date"
                  autoComplete=""
                  variant="outlined"
                  name="period_to"
                  value={ComplianceFormData.period_to === undefined ? input.period_to : ComplianceFormData.period_to}
                  onChange={handleChangeInput}
                  className="-mr-2"
                  style={{marginRight: "-8px !important"}}
                  className="assessment__date assessment__from"
                  disabled={ComplianceFormData.length == 0 ? false : true}
              />
            </div>
            <div className="assessInfoForm">
              <ReactTagInput 
              tags={ComplianceFormData.departments === undefined ? tags : ComplianceFormData.departments}
              placeholder="Enter Department Name and Press Enter"
              editable={ComplianceFormData.length == 0 ? false : true}
              removeOnBackspace="true"
              onChange={handleChangeTag}
              />
            </div>
            {/* <TextField
                id="owner-input"
                label="Owner"
                type="text"
                autoComplete=""
                variant="outlined"
                name="owner"
                value={`${userData.first_name} ${userData.last_name}`}
                onChange={handleChangeInput}
                disabled
            /> */}
            <div className="buttonNext">
                <button type="submit" disabled style={{display: "none"}} aria-hidden="true"></button>
                <Button
                    to=""
                    className="whitespace-nowrap"
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {e.preventDefault() ; postAssessmentData()}}
                    type="submit"
                >
                    <span className="sm:flex">NEXT</span>
                </Button>
            </div>
        </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // userData: state.newUserReducer.user.data[0],
    userData: state.newUserReducer.user.data,
  }
}


export default connect(mapStateToProps)(React.memo(AssesmentInfoFormCOMPLIANCE));
