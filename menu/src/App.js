import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Menu } from "./components/Menu";
import { HomePage } from "./components/HomePage";
import { DriftPage } from "./components/DriftPage";
import { ForzaPage } from "./components/ForzaPage";
import { TimeAttackPage } from "./components/TimeAttackPage";
import { Page404 } from "./components/Page404";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
