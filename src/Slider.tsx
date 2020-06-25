import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useGlobalState } from './Store';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const valuetext = (value: number) => {
  return `${value}s`;
}

const DiscreteSlider = () => {
  const classes = useStyles();
  const {globalState, dispatch} = useGlobalState();

  const handleSliderChange = (event: Object, value: number | number[]) => {
    dispatch({type: 'SET_SLIDER', value: value as number});
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Time per revolution
      </Typography>
      <Slider
        value={globalState.sliderValue}
        onChange={(e, v) => handleSliderChange(e,v)}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={valuetext}
        step={1}
        marks
        min={1}
        max={40}
      />
    </div>
  );
}

export default DiscreteSlider;