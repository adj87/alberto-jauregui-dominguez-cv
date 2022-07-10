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
      <Experience />
    </div>
  );
}

export default App;
