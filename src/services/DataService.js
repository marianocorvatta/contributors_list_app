import axios from "axios";

const DataService = {
  getUserData: (userName) => {
    console.log(`DataService.searchUser()`);
    const url = `https://api.github.com/users/${userName}`;
    return axios.get(url);
  },
  getUserRepos: (userName) => {
    console.log(`DataService.getUserRepos()`);
    const url = `https://api.github.com/users/${userName}/repos`;
    return axios.get(url);
  },
  getCollaborators: (userName, repoName) => {
    console.log(`DataService.getCollaborators()`);
    const url = `https://api.github.com/repos/${userName}/${repoName}/contributors`;
    return axios.get(url);
  },
};

export default DataService;
