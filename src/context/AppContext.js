import React, { createContext, useState, useEffect } from "react";

let AppContext = createContext();
let { Provider, Consumer } = AppContext;

function AppContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [reposData, setReposData] = useState([]);
  const [repoContributors, setRepoContributors] = useState([]);

  const handleSetRepoList = (repoList) => {
    repoList.forEach((r) => {
      setReposData((prevReposData) => [
        ...prevReposData,
        {
          id: r.id,
          name: r.name,
          link: r.html_url,
          description: r.description,
        },
      ]);
    });
  };

  const handleSetContributorsList = (contributorsList) => {
    repoContributors.length > 0 && setRepoContributors([]);
    contributorsList.forEach((c) => {
      setRepoContributors((prevData) => [
        ...prevData,
        {
          id: c.id,
          name: c.login,
          avatar: c.avatar_url,
          link: c.html_url,
        },
      ]);
    });
  };

  return (
    <Provider
      value={{
        userData,
        setUserData,
        reposData,
        setReposData,
        handleSetRepoList,
        repoContributors,
        handleSetContributorsList,
        setRepoContributors,
      }}
    >
      {children}
    </Provider>
  );
}

export { AppContextProvider, Consumer as AppConsumer, AppContext };
