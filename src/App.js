import "./App.css";
import { Initial, Education, Experience, Portfolio } from "./pages";
import { TopBar } from "./components/Topbar";

function App() {
  return (
    <>
      <Initial />
      <TopBar />
      <Education />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
