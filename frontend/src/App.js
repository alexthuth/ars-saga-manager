import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CreateCharacterPage from './components/CreateCharacterPage';
import EditCharacterPage from './components/EditCharacterPage';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetConfirmation from './components/ResetConfirmation';
import ResetPasswordForm from './components/ResetPasswordForm';
import { useAuth } from './useAuth';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/home" />} 
        />
        <Route 
          path="/home" 
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} 
        />
        <Route 
          path="/create-character" 
          element={isAuthenticated ? <CreateCharacterPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/edit-character/:id" 
          element={isAuthenticated ? <EditCharacterPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/forgot-password" 
          element={<ForgotPasswordForm />} 
        />
        <Route 
          path="/reset-confirmation" 
          element={<ResetConfirmation />} 
        />
        <Route 
          path="/reset-password/:token" 
          element={<ResetPasswordForm />} 
        />
      </Routes>
    </Router>
  );
}

export default App;