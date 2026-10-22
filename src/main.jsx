import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles are imported first so that component stylesheets,
// which are pulled in through App below, always win over the base layer.
import './styles/variables.css';
import './styles/global.css';
import './styles/components.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
