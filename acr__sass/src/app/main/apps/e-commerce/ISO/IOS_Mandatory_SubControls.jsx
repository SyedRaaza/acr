import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import _ from '@lodash';
import ISOSubControlsOfSubControls from './subControlsOFSubControls/ISO_subControls__subControls';

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

const ISOMandatorySubControls = ({ISOMandatorySubcontrolsData}) => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [select, setSelect] = useState({
        pd_status: '',
        ci_status: '',
        ca_status: '',
        cr_status: '',
        is_applicable: true,
        sub_control_id: 0,
        status: ''
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
    return (
        <React.Fragment>
              <div className={classes.root}>
                            {ISOMandatorySubcontrolsData.map((val , key) => (
                                <Accordion key={key} style={{ margin: "0.4rem 0 0.4rem 0" }} key={key} expanded={expanded === key} onChange={handleChange(key)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    className=""
                                >
                                    <div className="accordianSummary">
                                        <p>{val.display_id}</p>
                                        <p>{val.details}</p>
                                        <p className="invisible">##########</p>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails className="block">
                                    <ISOSubControlsOfSubControls ISOSubcontrolsData__subcontrols={val.questions} />
                                </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                   
        </React.Fragment>
    );
}

export default ISOMandatorySubControls;