
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import StudyMaterialPage from './StudyMaterialPage';
import ChatbotPage from './ChatbotPage';
import TestGenerationPage from './TestGenerationPage';
import ProfilePage from './ProfilePage';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <ProtectedRoute path="/materials" component={StudyMaterialPage} />
        <ProtectedRoute path="/chat" component={ChatbotPage} />
        <ProtectedRoute path="/tests" component={TestGenerationPage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <Route path="/" exact component={LoginPage} /> {/* Default to login */}
      </Switch>
    </Router>
  );
};

export default App;
