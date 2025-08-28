import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './components/LoginPage';
import './index.css';

createRoot(document.getElementById('login-root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);