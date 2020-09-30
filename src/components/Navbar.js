import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    bar: {
      backgroundColor: '#24292e',
    }
  }));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          GitHub App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
