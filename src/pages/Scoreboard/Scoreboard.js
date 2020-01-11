import React, { useEffect, useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

import { get } from "../../requests";

import SmartList from "../../components/SmartList/SmartList";
import SolutionCard from "../../components/SolutionCard/SolutionCard";
import Loading from "../../components/Loading/Loading";
import Window from "../../components/Window/Window";


const useStyles = makeStyles(theme => ({
  cell: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4),

    '& .MuiCard-root': {
      width: '30%',
    }
  }
}));

const Scoreboard = () => {
  const classes = useStyles();
  const [solutions, setSolutions] = useState([]);

  const updateSolutions = () => {
    get('scoreboard/').then(response => {
      setTimeout(() => {
        setSolutions(response.data);
      }, 300);
    });
  };

  const removeSolution = (id) => {
    setSolutions(solutions.filter((solution => solution.id !== id)));
  };

  useEffect(() => {
    updateSolutions();
  }, []);

  const renderItem = ({ index, style }) => {
    return (
      <div style={style} className={classes.cell}>
        <SolutionCard data={solutions[index]} removeThisCard={removeSolution}/>
      </div>
    )
  };

  return (
    <Window type="mono">
      { solutions.length === 0 &&
      <div className={classes.cell}>
        <Loading/>
      </div>
      }
      <SmartList
        itemSize={300}
        itemCount={solutions.length}
        renderItem={renderItem}
      />
    </Window>
  )
};


export default Scoreboard;