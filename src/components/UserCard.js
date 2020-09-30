import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RepoList from "./RepoList";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const UserCard = () => {
  const classes = useStyles();

  let { userData } = useContext(AppContext);

  return (
    <>
      {Object.entries(userData).length > 0 && (
        <Card className={classes.root}>
          <CardHeader
            title={userData.name ? userData.name : userData.loginName}
            style={{ backgroundColor: "#24292e", color: "#fff" }}
          />
          <CardMedia
            className={classes.media}
            image={userData.avatar}
            title={userData.name ? userData.name : userData.loginName}
          />
          <CardContent>
            <Grid container>
              <Grid item xs={4}>
                <i
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    fontStyle: "normal",
                    display: "block",
                  }}
                >
                  {userData.followers}
                </i>
                <span
                  style={{
                    fontSize: ".844rem",
                    letterSpacing: ".0625rem",
                    color: "lighten($primary-color, 17%)",
                  }}
                >
                  Followers
                </span>
              </Grid>
              <Grid item xs={4}>
                <i
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    fontStyle: "normal",
                    display: "block",
                  }}
                >
                  {userData.reposCount}
                </i>
                <span
                  style={{
                    fontSize: ".844rem",
                    letterSpacing: ".0625rem",
                    color: "lighten($primary-color, 17%)",
                  }}
                >
                  Repositoriy
                </span>
              </Grid>
              <Grid item xs={4}>
                <i
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    fontStyle: "normal",
                    display: "block",
                  }}
                >
                  {userData.following}
                </i>
                <span
                  style={{
                    fontSize: ".844rem",
                    letterSpacing: ".0625rem",
                    color: "lighten($primary-color, 17%)",
                  }}
                >
                  Following
                </span>
              </Grid>
            </Grid>
          </CardContent>
          <RepoList />
        </Card>
      )}
    </>
  );
};

export default UserCard;
