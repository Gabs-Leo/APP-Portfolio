import axios from "axios";
import { Header } from "./components/header/Header";
import { SectionGallery } from "./components/sectionGallery/SectionGallery";
import { SectionProjects } from "./components/sectionProjects/SectionProjects";
import { SectionSDS } from "./components/sectionSTS/SectionSTS";
import "./css/index.css"
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
      <Header />
      <SectionGallery />
      <SectionProjects />
      <SectionSDS />
      <SectionGallery />
      {
        projects.map(
          project =>
          <a key={project.id} href={project.link}>
            <div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        )
      }
    </div>
  );
}

export default App;