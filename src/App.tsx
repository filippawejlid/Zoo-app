import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { SingleAnimal } from "./components/pages/SingleAnimal";
import { NotFound } from "./components/NotFound";
import { Zoo } from "./components/pages/Zoo";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { AlertContext, alerts } from "./contexts/AlertContext";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(alerts.noNotis);

  alert.newNotis = () => {
    setAlert(alerts.notis);
  };

  alert.noNewNotis = () => {
    setAlert(alerts.noNotis);
  };

  return (
    <>
      <AlertContext.Provider value={alert}>
        <Provider store={Store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/zoo" element={<Layout />}>
                <Route index element={<Zoo />}></Route>
                <Route
                  path="/zoo/animal/:id"
                  element={<SingleAnimal />}
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </AlertContext.Provider>
    </>
  );
}

export default App;
