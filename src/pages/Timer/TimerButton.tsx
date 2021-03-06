import React, { useState, useEffect } from 'react';

import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(5),
    background: theme.palette.background.elevation3,
    marginTop: theme.spacing(10),
  },
}));


interface PropTypes {
  registerResult: (result: string) => void;
}

type Mode = 'idle' | 'countdown' | 'running' | 'over';


const TimerButton: React.FC<PropTypes> = ({ registerResult }) => {
  const classes = useStyles();

  const SPACE = 32;
  const maxCountdown = 15000;
  const [time, setTime] = useState<string>('00:00:00');
  const [mode, setMode] = useState<Mode>('idle');

  useEffect(()=> {
    const timestamp = Date.now();

    if (mode === 'countdown') {
      const repeater = setInterval(() => {
        const timeDelta = maxCountdown - (Date.now() - timestamp);
        if (timeDelta <= 0) setMode('over');
        setTime(convertTimeToString(timeDelta));
      }, 10);
      return (): void => clearInterval(repeater);
    }

    if (mode === 'running') {
      const repeater = setInterval(() => {
        setTime(convertTimeToString(Date.now() - timestamp));
      }, 10);
      return (): void => clearInterval(repeater);
    }

    if (mode === 'over') {
      setTime('00:00:00');
    }
  }, [mode]);

  const handleKeyPress = (event: KeyboardEvent): void => {
    event.preventDefault();
    if (event.keyCode === SPACE && mode === 'idle' ) setMode('countdown');
  };

  const handleKeyUp = (event: KeyboardEvent): void => {
    if (event.keyCode === SPACE) {
      if (mode === 'running') {
        registerResult(time);
        setMode('idle');
      } else if (mode === 'over') {
        setMode('idle');
      } else {
        setMode('running');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keypress', handleKeyPress);

    return (): void => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keypress', handleKeyPress);
    };
  });

  const composeHelperText = (): string => {
    switch (mode) {
      case 'running': return 'Go fast!';
      case 'countdown': return 'Release SPACE to begin';
      case 'over': return 'You are too late!';
      default: return 'Hold SPACE to start countdown';
    }
  };

  const helperColor = (): 'primary' | 'secondary' | 'textSecondary' => {
    switch (mode) {
      case 'running': return 'primary';
      case 'over': return 'secondary';
      default: return 'textSecondary';
    }
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h1"> {time} </Typography>
      <Typography variant="h5" color={helperColor()}>
        {composeHelperText()}
      </Typography>
    </Paper>
  );
};

const convertTimeToString = (timeDelta: number): string => {
  let resultTime = '';

  const minute = Math.floor(timeDelta / 60000);
  if (minute < 10) resultTime += '0';
  resultTime += minute + ':';

  let second = Math.floor(timeDelta / 1000);
  if (second > 59) second %= 60;
  if (second < 10) resultTime += '0';
  resultTime += second + ':';

  const mill = Math.floor((timeDelta % 1000) / 10);
  if (mill < 10) resultTime += '0';
  resultTime += mill;

  return resultTime;
};


export default TimerButton;
