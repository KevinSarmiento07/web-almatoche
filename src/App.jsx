import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { BasePage } from "./pages/BasePage";
import { MainCucPage } from "./sedeCuc/pages/MainCucPage";
import { MenuCucPage } from "./sedeCuc/pages/MenuCucPage";
import { BaseMenuPage } from "./pages/BaseMenuPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/cucuta" element={<MainCucPage />}></Route>
        </Route>

        <Route path="/cucuta/menu" element={<BaseMenuPage />}>
          <Route path="/cucuta/menu" element={<MenuCucPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
