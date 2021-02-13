import React , {useState , useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {getUsers , reduceCake , getCisData} from '../../../../store/redux/index';
import {connect} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AccordianChild from './accordianChild';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export const masterData = {};

const AccordionComponent = ({cisData}) => {

  const [loading , setLoading] = useState(false)
  const [checked, setChecked] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [masterFormData , setMasterFormData] = useState([])
  
  const [select, setSelect] = useState({
    policy: '',
    implemented: '',
    automated: '',
    report: ''
  });



    useEffect(() => {
        console.log("Mounted")
    },[])

  const classes = useStyles();
  const checkVal = 3;

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(masterData)
  };
  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeSelect = (event) => {
    console.log(select)
    const name = event.target.name;
    setSelect({
      ...select,
      [name]: event.target.value,
    });
  };

  const [accBorderColor , setAccBorderColor] = useState(null)
  const isChangeColor = (i) => {
    setAccBorderColor(i)
    //console.log(style)
  }

console.log(cisData.sub_controls);
  return (
    <div className={classes.root}>
      <AccordianChild />
        {/* <button onClick={reduce}>Reduce</button> */}
        {cisData.sub_controls.map((val , key) => (
          <Accordion onClick={(e) => {console.log("acc")}} key={key} expanded={expanded === val.id} onChange={handleChange(val.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className=""
          >
            <div className="accordianSummary">
            <p>{val.id}</p>
            <p>{val.display_id}</p>
            <FormControlLabel control={<Checkbox color="secondary" onClick={() => console.log(key)} name="checkedC" />} label="Applicable" />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="controlContent">
            
              <div className="controlContent--detail">
                <p>{val.detail}</p>
              </div>
              <div className="controlContent--types grid grid-cols-2 gap-36 justify-center">
                <div className="impGroup">
                  <p>Implementation Group</p>
                  <p>{val.implementation_groups.toString()}</p>
                </div>
                <div className="baseLine">
                  <p>Baseline</p>
                  <p>{val.sensor_baseline}</p>
                </div>
                <div className="controlContent--types__policy">
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Policy Defined</InputLabel>
                    <Select
                      native
                      value={select.policy}
                      onChange={handleChangeSelect}
                      label="Policy Defined"
                      inputProps={{
                        name: 'policy',
                        id: 'policy-controlled',
                      }}
                    >
                      {val.pd_status.map((valPD , key) => (
                        <option key={key} className="selectOptions" value={valPD}>{valPD}</option>
                      ))}
                      
                    </Select>
                  </FormControl>
                </div>
                <div className="controlContent--types__controlImplement">
                  <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel htmlFor="outlined-age-native-simple">Control Implemented</InputLabel>
                      <Select
                        native
                        value={select.implemented}
                        onChange={handleChangeSelect}
                        label="Control Implemented"
                        inputProps={{
                          name: 'implemented',
                          id: 'control-implemented',
                        }}
                      >
                        {val.ci_status.map((valCI , key) => (
                          <option key={key} value={valCI}>{valCI}</option>
                        ))}
                      </Select>
                    </FormControl>
                </div>
                <div className="controlContent--types__controlATE">
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Control Automated</InputLabel>
                    <Select
                      native
                      value={select.automated}
                      onChange={handleChangeSelect}
                      label="Control Automated"
                      inputProps={{
                        name: 'automated',
                        id: 'control-automated',
                      }}
                    >
                      {val.cate_status.map((valCATE , key) => (
                        <option key={key} value={valCATE}>{valCATE}</option>
                      ))}
                      
                    </Select>
                  </FormControl>
                </div>
                <div className="controlContent--types__controlRTB">
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Control Report to Bussiness</InputLabel>
                    <Select
                      native
                      value={select.report}
                      onChange={handleChangeSelect}
                      label="Control Report to Bussiness"
                      inputProps={{
                        name: 'report',
                        id: 'control-report',
                      }}
                    >
                      {val.crb_status.map((valCRB , key) => (
                        <option key={key} value={valCRB}>{valCRB}</option>
                      ))}
                      
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="controlContent--saveButton">
              <Button
                to=""
                className="whitespace-nowrap"
                variant="contained"
                color="secondary"
                onClick={() => {masterData[val.display_id]=select ; console.log(masterData)}}
              >
                <span>Save</span>
              </Button>
              </div>
            </div>

          </AccordionDetails>
        </Accordion>
        ))}
        		<div className="buttonNext">
              <Button
                to=""
                className="whitespace-nowrap"
                variant="contained"
                color="secondary"
                onClick={() => console.log(masterData)}
              >
                <span className="sm:flex">Submit</span>
              </Button>
            </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   console.log(state)
//     return {
//         userData: state.userReducer,
//         //cisData: state.cisReducer,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     console.log(dispatch)
//     return {
//         getUsers: () => dispatch(getUsers()),
//         reduce: () => dispatch(reduceCake()),
//         getCis: () => dispatch(getCisData())
//     }
// }

export default  (React.memo(AccordionComponent));
