import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
