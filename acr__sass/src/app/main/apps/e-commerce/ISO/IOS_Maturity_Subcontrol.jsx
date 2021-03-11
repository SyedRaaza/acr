import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const ISOMaturitySubcontrol = ({ISOSubcontrolsData}) => {

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
    console.log(JSON.stringify(ISOSubcontrolsData.sub_controls) + "ISO M")
    return (
        <React.Fragment>
              <div className={classes.root}>
                    {ISOSubcontrolsData.map((val , key) => (
                        <div key={key}>
                            {val.sub_controls.map((val_sub , key) => (
                                <Accordion key={key} style={{ margin: "0.4rem 0 0.4rem 0" }} key={key} expanded={expanded === val_sub.id} onChange={handleChange(val.id)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    className=""
                                >
                                    <div className="accordianSummary">
                                        <p>{val_sub.id}</p>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails className="block">
                                    <div className="controlContent">
                                    <div className="controlContent--detail">
                                        <p>{val_sub.question}</p>
                                    </div>
                                    <div className="controlContent--types grid grid-cols-2 gap-36 justify-center">
                                        <div className="impGroup">
                                            <p>Current Score</p>
                                            <p>{val_sub.cs}</p>
                                        </div>
                                        <div className="baseLine">
                                            <p>Desired Score</p>
                                            <p>{val_sub.ds}</p>
                                        </div>
                                        <div className="controlContent--types__policy">
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel htmlFor="outlined-age-native-simple">Current Maturity Level</InputLabel>
                                            <Select
                                            native
                                            value={select.pd_status}
                                            onChange={handleChangeSelect}
                                            label="Current Maturity Level"
                                            inputProps={{
                                                name: 'pd_status',
                                                id: 'policy-controlled',
                                            }}
                                            >
                                            {val_sub.cml.map((val_cml , key) => (
                                                <option key={key} className="selectOptions" value={val_cml}>{val_cml}</option>
                                            ))}
                                            
                                            </Select>
                                        </FormControl>
                                        </div>
                                        <div className="controlContent--types__controlImplement">
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel htmlFor="outlined-age-native-simple">Desired Maturity Level</InputLabel>
                                            <Select
                                                native
                                                value={select.implemented}
                                                onChange={handleChangeSelect}
                                                label="Desired Maturity Level"
                                                inputProps={{
                                                name: 'ci_status',
                                                id: 'control-implemented',
                                                }}
                                            >
                                                {val_sub.dml.map((val_dml , key) => (
                                                <option key={key} value={val_dml}>{val_dml}</option>
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
                                        //onClick={() => {masterData[val.display_id]=select ; console.log(masterData); select["sub_control_id"]=val.id; makeAssesment() }}
                                    >
                                        <span>Save</span>
                                    </Button>
                                    </div>
                                    </div>
            
                                </AccordionDetails>
                                </Accordion>
                            ))}
                            {/* {val.sub_controls((val , key) => (
                            
                        ))} */}
                        </div>
                    ))}
                </div> 
        </React.Fragment>
    );
}

export default ISOMaturitySubcontrol;