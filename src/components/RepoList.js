import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import DataService from "../services/DataService";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    alignContent: "center",
    display: "flex",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const RepoList = () => {
  let { userData, reposData, handleSetContributorsList } = useContext(
    AppContext
  );

  const classes = useStyles();
  const [selectedRepo, setSelectedRepo] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setSelectedRepo(e.target.value);
    getColaboratorsList(userData.loginName, e.target.value);
  };

  const getColaboratorsList = async (username, repo) => {
    let resp = await DataService.getCollaborators(username, repo);
    console.log("data colaboradores", resp.data);
    if (resp.data) {
      handleSetContributorsList(resp.data);
    } else {
      handleSetContributorsList([]);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1000);
    }
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="repoSelectlabel">Repository list</InputLabel>
        <Select
          labelId="repoSelectlabel"
          id="repoSelect"
          value={selectedRepo}
          onChange={handleChange}
          label="Repository list"
        >
          {reposData.map((r) => (
            <MenuItem key={`r_${r.id}`} value={r.name}>
              {r.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <span style={{ fontSize: "12px", color: "black" }}>
        {showMessage && "This repo do not have contributors"}
      </span>
    </>
  );
};

export default RepoList;
