import React , {useState , useEffect} from 'react';
import { withStyles, makeStyles , useTheme} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import RadarChart from "../../../../documentation/third-party-components/react-chartjs-2/examples/radar";
import { Button } from "@material-ui/core";

const PrettoSlider = withStyles({
    root: {
      color: "primary",
      height: 8,
    },
    thumb: {
      height: 16,
      width: 16,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -5,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 6,
      borderRadius: 3,
    },
    rail: {
      height: 6,
      borderRadius: 3,
    },
  })(Slider);

  const ShowChartView = () => {

    const data = {
      //labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      labels: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 96, 27, 100]
        }
      ]
    };

      return (
        <RadarChart data={data} />
      )
  };

  const ShowSliderView = () => {
      return(
        <div className="w-full nist_IPDRR--left grid grid-cols-2">
            <Typography
            color="textPrimary"
            className="text-base"
            >
                Identify
            </Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={100} />
            <Typography
            color="textPrimary"
            className="text-base"
            >
                Protect
            </Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
            <Typography
            color="textPrimary"
            className="text-base"
            >
                Detect
            </Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={70} />
            <Typography
            color="textPrimary"
            className="text-base"
            >
                Respond
            </Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} />
            <Typography
            color="textPrimary"
            className="text-base"
            >
                Recover
            </Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={60} />
        </div>
      )
  }

const NistIPDRR = (props) => {

    const [toggle , setToggle] = useState(true);

    return (
        <React.Fragment>
            <Card className="w-full mt-12 p-20 rounded-8 shadow">
                <div className="flex justify-center items-center">
                    {toggle ? <ShowChartView /> : <ShowSliderView />}
                </div>
                <div className="changeView w-full text-center mt-8">
                <Button 
                    variant="contained"
                    color="secondary"
                    type="button"
                    onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? "Slide View" : "Chart View"}
                </Button>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default NistIPDRR;