import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import { Adm } from "./pages/Adm";
import { EditProject } from "./pages/EditProject";
import { Home } from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="/adm/:projectId" element={<EditProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;