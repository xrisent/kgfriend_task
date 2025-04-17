import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage/UsersPage';
import Layout from './components/Layout/Layout';
import './globals.scss'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
