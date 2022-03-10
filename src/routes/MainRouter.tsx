import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import SuspectDetailsPage from '../pages/SuspectDetailsPage';
import SuspectListPage from '../pages/SuspectListPage';
import SuspectRegisterPage from '../pages/SuspectRegisterPage';
const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/people" element={<SuspectListPage />} />
        <Route path="/register" element={<SuspectRegisterPage />} />
        <Route path="/suspect">
          <Route path=":id" element={<SuspectDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRouter;
