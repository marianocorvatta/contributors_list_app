import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ContributorsList from "./ContributorList";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ContributorsCard = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title="Contributors list"
          style={{ backgroundColor: "#24292e", color: "#fff" }}
        />
        <CardContent>
          <ContributorsList />
        </CardContent>
      </Card>
    </>
  );
};

export default ContributorsCard;
