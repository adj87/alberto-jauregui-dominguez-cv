import "./App.css";
import { Mongo, ReactIcon, Node } from "./icons";

function App() {
  return (
    <div className="flex flex-col items-center justify-between w-96 m-auto pt-14 h-full">
      <img
        alt="alberto"
        src="/alberto.jpg"
        className="w-48 shadow-white-500/50"
        style={{ clipPath: "circle(40% at 50% 40%)" }}
      />
      <div className="lg:text-7xl text-5xl flex flex-col m-auto w-full items-center justify-between text-white">
        <span>Alberto </span>
        <span>Jauregui </span>
        <span>Domínguez </span>
      </div>
      <div className="lg:text-5xl text-4xl flex flex-col m-auto w-full items-center justify-between h-18 text-white mt-16">
        <span className="blue-gradient">Full Stack</span>
        <span className="blue-gradient text-center">Web Developer</span>
      </div>
      <div className="lg:text-5xl text-4xl flex flex-row m-auto w-full items-center justify-between h-18 text-white mt-16">
        <Mongo />
        <span>E</span>
        <ReactIcon />
        <Node />
      </div>
    </div>
  );
}

export default App;
