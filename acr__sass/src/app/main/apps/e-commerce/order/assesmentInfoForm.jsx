import React , {useState , useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button , Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ReactTagInput from "@pathofdev/react-tag-input";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "@pathofdev/react-tag-input/build/index.css";
import "../../../../../styles/assesInfoForm.scss";
import { getCisData } from '../../../../store/redux';
import {connect , useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));


const AssesmentInfoForm = ({changeTab , nextTab , handleEnableTabs , userData , cisMaturityData}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tags, setTags] = useState([])
  const [selectedDateTo, setSelectedDateTo] = useState(new Date('2014-08-18T21:11:54'));
  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date('2014-08-18T21:11:54'));
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
  }

  const handleChangeTag = newTag => {
    setTags(newTag)
    input.departments = [];
    input.departments = newTag ;
  }


  const getCis = () => {
    dispatch(getCisData(input))
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
                value={input.name}
                onChange={handleChangeInput}
            />
            <div className="w-full flex items-center justify-between">
              <TextField
                  id="period-input"
                  label="From"
                  type="date"
                  autoComplete=""
                  variant="outlined"
                  name="period_from"
                  value={input.period_from}
                  onChange={handleChangeInput}
                  className="assessment__date"
              />
              <TextField
                  id="period-input"
                  label="To"
                  type="date"
                  autoComplete=""
                  variant="outlined"
                  name="period_to"
                  value={input.period_to}
                  onChange={handleChangeInput}
                  className="-mr-2"
                  style={{marginRight: "-8px !important"}}
                  className="assessment__date assessment__from"
              />
            </div>
            <div className="assessInfoForm">
              <ReactTagInput 
              tags={tags}
              placeholder="Enter Department Name and Press Enter"
              editable="true"
              removeOnBackspace="true"
              onChange={handleChangeTag}
              />
            </div>
            <TextField
                id="owner-input"
                label="Owner"
                type="text"
                autoComplete=""
                variant="outlined"
                name="owner"
                value={`${userData.first_name} ${userData.last_name}`}
                onChange={handleChangeInput}
                disabled
            />
            <div className="buttonNext">
                <button type="submit" disabled style={{display: "none"}} aria-hidden="true"></button>
                <Button
                    to=""
                    className="whitespace-nowrap"
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {e.preventDefault() ;console.log(input); getCis(); handleEnableTabs(false)}}
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
    userData: state.newUserReducer.user.data[0],
    cisMaturityData :state.cisMaturityData
  }
}


export default connect(mapStateToProps)(React.memo(AssesmentInfoForm));
