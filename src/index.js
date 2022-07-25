import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import { store } from "./store";
import { ParrotApp } from "./ParrotApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //<StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <ParrotApp />
      </BrowserRouter>
    </Provider>  
  //</StrictMode>
);
