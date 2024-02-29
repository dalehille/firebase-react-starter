import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';

const rootElement = document.getElementById('root');
let root;

function Main() {

  const [mode, setMode] = React.useState('dark');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App setMode={setMode} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

if (import.meta.hot) {
  // If the module is hot-reloadable, use the existing root if it exists
  root = rootElement._reactRootContainer?.root ?? createRoot(rootElement);
} else {
  // If the module is not hot-reloadable, always create a new root
  root = createRoot(rootElement);
}

root.render(<Main />);

// Preserve the root across hot reloads
// if (import.meta.hot) {
//   import.meta.hot.dispose(() => {
//     rootElement._reactRootContainer = { root };
//   });
// }
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    rootElement._reactRootContainer = { root };
  });
}