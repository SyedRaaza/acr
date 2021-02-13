import React , {useState , useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button , Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "../../../../../styles/assesInfoForm.scss";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));


const AssesmentInfoForm = ({changeTab , nextTab}) => {
  const classes = useStyles();
  const [tags, setTags] = useState([])
  const [input , setInput] = useState({
    name: "",
    period: "",
    department: [],
    owner: ""
  });

  const handleChangeInput = event => {
    const name = event.target.name;
    setInput({
        ...input,
        [name]: event.target.value
    });
    console.log(input)
    console.log(tags)
  }

  const handleChangeTag = newTag => {
    setTags(newTag)
    input.department = [];
    input.department.push(newTag);
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
            <TextField
                id="period-input"
                label="Period"
                type="text"
                autoComplete=""
                variant="outlined"
                name="period"
                value={input.period}
                onChange={handleChangeInput}
            />
            <Box>
              <ReactTagInput 
              tags={tags}
              placeholder="Enter Department Name and Press Enter"
              editable="true"
              removeOnBackspace="true"
              onChange={handleChangeTag}
              />
            </Box>
            <TextField
                id="owner-input"
                label="Owner"
                type="text"
                autoComplete=""
                variant="outlined"
                name="owner"
                value={input.owner}
                onChange={handleChangeInput}
            />
            <div className="buttonNext">
                <button type="submit" disabled style={{display: "none"}} aria-hidden="true"></button>
                <Button
                    to=""
                    className="whitespace-nowrap"
                    variant="contained"
                    color="secondary"
                    onClick={(e) => {e.preventDefault();changeTab(undefined , nextTab);console.log(input)}}
                    type="submit"
                >
                    <span className="sm:flex">NEXT</span>
                </Button>
            </div>
        </form>
    </div>
  )
}

export default React.memo(AssesmentInfoForm);
