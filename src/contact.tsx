import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ContactPage from './components/ContactPage';
import './index.css';

createRoot(document.getElementById('contact-root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>
);