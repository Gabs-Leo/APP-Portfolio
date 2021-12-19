import { Header } from "./components/header/Header";
import { SectionGallery } from "./components/sectionGallery/SectionGallery";
import { SectionSDS } from "./components/sectionSTS/SectionSTS";
import "./css/index.css"

function App() {
  return (
    <div className="App">
      <Header />
      <SectionSDS />
      <SectionGallery />
    </div>
  );
}

export default App;