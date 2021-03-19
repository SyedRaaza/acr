import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SubControlsOfSubControls from './subControlsOFSubControls/subControls__subControls';
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

    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <React.Fragment>
              <div className={classes.root}>
                {ISOSubcontrolsData.map((val , key) => (
                    <Accordion key={key} style={{ margin: "0.4rem 0 0.4rem 0" }} key={key} expanded={expanded === val.id} onChange={handleChange(val.id)}>
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
                                   <SubControlsOfSubControls ISOSubcontrolsData__subcontrols={val.questions} />
                            </div>
                        </div>
                    </AccordionDetails>
                    </Accordion>
                ))}
        </div> 
        </React.Fragment>
    );
}

export default ISOMaturitySubcontrol;