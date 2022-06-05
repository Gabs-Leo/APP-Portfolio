import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import { Home } from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Adm } from "./pages/Adm";
import { EditProject } from "./pages/EditProject";
import { LoginPage } from "./pages/LoginPage";

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="/adm/:projectId" element={<EditProject />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*
          <Route path="/adm" element={<Adm />} />
          <Route path="/adm/:projectId" element={<EditProject />} />
*/

export default App;