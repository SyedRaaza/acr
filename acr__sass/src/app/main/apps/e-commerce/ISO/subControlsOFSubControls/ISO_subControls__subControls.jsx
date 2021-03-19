import React , {useState} from 'react';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';
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

const ISOSubControlsOfSubControls = ({ISOSubcontrolsData__subcontrols}) => {

    const theme  = useTheme();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [select, setSelect] = useState({
        pd_status: '',
        ci_status: '',
        ca_status: '',
        cr_status: '',
        is_applicable: true,
        sub_control_id: 0
    });

    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChangeSelect = (event) => {
        const name = event.target.name;
        setSelect({
          ...select,
          [name]: event.target.value,
        });
    };

    const updateAssessment = data => {
        console.log(select.pd_status)
        axios.patch("/maturity/iso/assessment/" ,
        { type:"requirement", question_id:data.id , status_selection: select.pd_status })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    return (
        <React.Fragment>
              <div className={classes.root}>
                {ISOSubcontrolsData__subcontrols.map((val , key) => (
                    <Accordion style={{margin: "0.4rem 0 0.4rem 0" }} key={key} key={key} expanded={expanded === val.id} onChange={handleChange(val.id)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className=""
                    >
                        <div className="accordianSummary">
                            <p className="text-14">{val.display_id}</p>
                            <p className="capitalize text-14 font-bold">{val.details}</p>
                            <p className="invisible">##########</p>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="block">
                        <div className="controlContent">
                            <div className="controlContent--types grid grid-cols-1 gap-36 justify-center">
                                <div key={key} className="controlContent--types__policy">
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel htmlFor="outlined-age-native-simple">Current Status</InputLabel>
                                        <Select
                                        native
                                        value={select.pd_status}
                                        onChange={handleChangeSelect}
                                        label="Current Status"
                                        inputProps={{
                                            name: 'pd_status',
                                            id: val.id,
                                        }}
                                        >
                                        {val.status.map((val_sts , key) => (
                                            <option key={key} className="selectOptions" value={val_sts}>{val_sts}</option>
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
                                onClick={() => { updateAssessment({id:val.id , status:val.status_selection}) ; alert(val.id) }}
                            >
                                <span>Save</span>
                            </Button>
                            </div>
                        </div>
                    </AccordionDetails>
                    </Accordion>
                ))}
        </div> 
        </React.Fragment>
    );
}

export default ISOSubControlsOfSubControls;