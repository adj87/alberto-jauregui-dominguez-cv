import "./App.css";
import { Initial, Education, Experience, Portfolio, Bottom } from "./pages";
import { TopBar } from "./components/Topbar";

function App() {
  return (
    <>
      <Initial />
      <TopBar />
      <Education />
      <Experience />
      <Portfolio />
      <Bottom />
    </>
  );
}

export default App;
