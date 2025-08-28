import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import OvAIApp from './components/OvAIApp';
import './index.css';

createRoot(document.getElementById('ovai-root')!).render(
  <StrictMode>
    <OvAIApp />
  </StrictMode>
);