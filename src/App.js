import "./App.css";
import { Initial, Education, Experience } from "./pages";
import { TopBar } from "./components/Topbar";

function App() {
  return (
    <div>
      <Initial />
      <TopBar />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
