import React , {useState , useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import AccordianChild from './accordianChild';
import userServices from "../../../../services/backendAPI/userServices";
import Widget7 from "app/main/apps/dashboards/analytics/widgets/Widget7";
import { selectWidgetsEntities, getWidgets } from 'app/main/apps/dashboards/analytics/store/widgetsSlice';
import _ from '@lodash';


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
  const [checkboxState , setCheckBoxState] = useState(false)
  
  const [select, setSelect] = useState({
    pd_status: '',
    ci_status: '',
    ca_status: '',
    cr_status: '',
    is_applicable: true,
    sub_control_id: 0
  });

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

  const handleCheckboxState = newState => {
    setCheckBoxState(newState)
  }

  const makeAssesment = () => {
    axios.patch('/maturity/assessment/',select)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err + "from Patch")
    })
  }

  // if (_.isEmpty(widgets)) {
	// 	return null;
	// }
  return (
    <div className={classes.root}>
        {/* <button onClick={reduce}>Reduce</button> */}
        {cisData.sub_controls.map((val , key) => (
          <Accordion style={{ margin: "0.4rem 0 0.4rem 0" }} key={key} expanded={expanded === val.id} onChange={handleChange(val.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className=""
          >
            <div className="accordianSummary">
            <p>{val.display_id}</p>
            <p className="w-3/4 wrap">{val.details}</p>
            <FormControlLabel control={<Checkbox color="secondary" onChange={handleChangeSelect} id={key} name="is_applicable" value={true} />} label="Applicable" />
            </div>
          </AccordionSummary>
          <AccordionDetails className="block">
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
                      value={select.pd_status}
                      onChange={handleChangeSelect}
                      label="Policy Defined"
                      inputProps={{
                        name: 'pd_status',
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
                          name: 'ci_status',
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
                        name: 'ca_status',
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
                        name: 'cr_status',
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
                onClick={() => {masterData[val.display_id]=select ; console.log(masterData); select["sub_control_id"]=val.id; makeAssesment() }}
              >
                <span>Save</span>
              </Button>
              </div>
            </div>

          </AccordionDetails>
        </Accordion>
        ))}
    </div>
  );
}


export default  (React.memo(AccordionComponent));
