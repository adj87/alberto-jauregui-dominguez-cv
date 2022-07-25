import "./App.css";
import { Initial, Education, Experience } from "./pages";
import { TopBar } from "./components/Topbar";

function App() {
  return (
    <>
      <Initial />
      <TopBar />
      <Education />
      <Experience />
      <Experience />
    </>
  );
}

export default App;
