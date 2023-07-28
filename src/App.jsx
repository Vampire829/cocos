import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sign from "./components/Sign/Sign";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </>
  );
}

export default App;
//Глобальное добавляет
