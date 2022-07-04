import "./App.css";
import { Initial, Education } from "./pages";
import { TopBar } from "./pages/Education/Topbar";

function App() {
  return (
    <div>
      <Initial />
      <TopBar />
      <Education />
      <Education />
    </div>
  );
}

export default App;
