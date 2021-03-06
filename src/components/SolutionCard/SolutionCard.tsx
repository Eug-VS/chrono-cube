import React, { useState } from 'react';

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Grid,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Solution } from '../../types';

import { makeStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/Timer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';

import GithubAvatar from '../GithubAvatar/GithubAvatar';
import { del } from '../../requests';


const DATE_FORMAT = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    background: theme.palette.background.elevation2,

    '& .MuiTypography-h3': {
      margin: theme.spacing(2),
    },
  },
  menu: {
    '& ul': {
      background: theme.palette.background.elevation3,
    }
  },
}));


interface PropTypes {
  data: Solution;
  removeThisCard: (id: number) => void;
}


const SolutionCard: React.FC<PropTypes> = ({ data, removeThisCard }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const author = data.author? data.author.username : 'anonymous';
  const date = new Date(data.date);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleDelete = (): void => {
    del(`solutions/${data.id}/`).then(() => {
      removeThisCard(data.id);
    });
    handleClose();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<GithubAvatar username={author} />}
        title={author}
        subheader={date.toLocaleString('default', DATE_FORMAT)}
        action={
          <IconButton onClick={handleOpenMenu}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={handleDelete}>
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <TimerIcon/>
          </Grid>
          <Grid item>
            <Typography variant="h3" color="primary">
              { data.result }
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default SolutionCard;
