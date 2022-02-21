import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import { Adm } from "./pages/Adm";
import { Home } from "./pages/Home";
import { BASE_URL } from "./services/URLS";

class Project{
  id:number;
  name:string;
  description:string;
  link:string;

  constructor(id:number, name:string, description:string, link:string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
  }
}

let projects:Project[] = [new Project(1, "Projeto", "lorem", "/")];

function App() {
  axios.get(`${BASE_URL}`)
    .then(response => {
      console.log(response.data);
    })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="adm" element={<Adm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;