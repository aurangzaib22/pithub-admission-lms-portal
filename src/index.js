import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/reducers/RootReducer";
import thunk from "redux-thunk";
import "./styles/Styles.scss";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = createTheme({
  palette: {
    primary: {
      main: "#01411C",
      light: "#fff",
    },
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
