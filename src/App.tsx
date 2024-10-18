import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routing.tsx';


function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
