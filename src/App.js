import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { Provider } from "react-redux";
import Routes from "./Routes/index.js";
import { ThemeProvider } from '@mui/material';
import {LightTheme}  from './themes';

import { store, persistor } from "./store";

// * 1 - Configurar o componente de Provider no App.js
// * 2 - Configurar o create Store
// * 3 - Configurar as actions
// * 4 - Configurar as reducers

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={LightTheme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
