import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { SingleAnimal } from "./components/pages/SingleAnimal";
import { NotFound } from "./components/NotFound";
import { Zoo } from "./components/pages/Zoo";
// import { Start } from './components/pages/Start';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/zoo" element={<Zoo />}></Route>
            <Route path="/animal/:id" element={<SingleAnimal />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
