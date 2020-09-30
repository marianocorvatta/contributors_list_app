import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ContributorList = () => {
  const classes = useStyles();
  let { repoContributors } = useContext(AppContext);

  return (
    <>
      <List className={classes.root}>
        {repoContributors.map((c) => (
          <>
            <ListItem key={`c_${c.id}`}>
              <ListItemAvatar>
                <Avatar src={c.avatar} />
              </ListItemAvatar>
              <a
                href={c.link}
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary={c.name} secondary={c.link} />
              </a>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
};

export default ContributorList;
