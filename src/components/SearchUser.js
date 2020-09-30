import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  Container,
  TextField,
} from "@material-ui/core";

import UserCard from "./UserCard";
import ContributorsCard from "./ContributorsCard";

import DataService from "../services/DataService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "25%",
      width: "25ch",
    },
  },
  grid: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: "25px",
    marginLeft: "50px",
    display: "flex",
  },
  card: {
    maxWidth: 345,
  },
}));

const SearchUser = () => {
  let {
    setUserData,
    setReposData,
    reposData,
    handleSetRepoList,
    repoContributors,
    setRepoContributors,
  } = useContext(AppContext);

  const classes = useStyles();
  const [searchedUserName, setSearchedUserName] = useState();

  const getUserData = async () => {
    reposData.length > 0 && setReposData([]);
    repoContributors.length > 0 && setRepoContributors([]);

    let resp = await DataService.getUserData(searchedUserName);

    setUserData({
      name: resp.data.name,
      avatar: resp.data.avatar_url,
      followers: resp.data.followers,
      reposCount: resp.data.public_repos,
      following: resp.data.following,
      loginName: resp.data.login,
    });

    let respRepos = await DataService.getUserRepos(resp.data.login);
    const repoList = respRepos.data;
    handleSetRepoList(repoList);
    setSearchedUserName("");
  };

  const handleInput = (e) => {
    setSearchedUserName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getUserData();
  };

  return (
    <>
      <Container maxWidth="xl" display="flex">
        <Grid container className={classes.grid} spacing={4}>
          <Grid item xs={12} md={4} style={{ maxWidth: "345px" }}>
            <Card className={classes.card}>
              <CardHeader
                title="Search by user name"
                style={{ backgroundColor: "#24292e", color: "#fff" }}
              />
              <CardContent>
                <TextField
                  id="outlined-basic"
                  style={{ marginTop: "25px" }}
                  label="Username"
                  variant="outlined"
                  value={searchedUserName}
                  onChange={handleInput}
                />
                <Button
                  variant="contained"
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#24292e",
                    color: "#fff",
                  }}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} style={{ maxWidth: "345px" }}>
            <UserCard />
          </Grid>
          <Grid item xs={12} md={4} style={{ maxWidth: "500px" }}>
            {repoContributors.length > 0 && <ContributorsCard />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SearchUser;
