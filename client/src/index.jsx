import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { HashRouter } from 'react-router-dom';
import App from './app/App';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StyledEngineProvider injectFirst>
    <HashRouter>
      <CssBaseline />
      <App />
    </HashRouter>
  </StyledEngineProvider>
);
