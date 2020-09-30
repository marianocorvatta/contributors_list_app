import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';

import Navbar from './components/Navbar';
import SearchUser from './components/SearchUser';

function App() {
  return (
    <>
      <AppContextProvider>
        <Navbar/>
        <SearchUser/>
      </AppContextProvider>
    </>
  );
}

export default App;
