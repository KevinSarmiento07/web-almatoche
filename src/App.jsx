import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { BasePage } from "./pages/BasePage";
import { MainCucPage } from "./sedeCuc/pages/MainCucPage";
import { MenuCucPage } from "./sedeCuc/pages/MenuCucPage";
import { BaseMenuPage } from "./pages/BaseMenuPage";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const isInitialLoad = location.state && location.state.initialLoad;
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if ((isInitialLoad, initialLoad && location.pathname !== "/")) {
      setInitialLoad(false); // Cambiar el estado para evitar futuras redirecciones
      window.location.href = "/";
    }
  }, [initialLoad, isInitialLoad]);
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
