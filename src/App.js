import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseLeave, setMouseLeave] = useState(false);

  const containerRef = useRef(null);
  const winHeight = window.innerHeight / 2;
  const winWidth = window.innerWidth / 2;

  function onMouseLeave() {
    document.addEventListener("mouseleave", () => {
      setPosition({ x: 0, y: 0 });
      setMouseLeave(true);
    });
  }

  function mouseMove(e) {
    setPosition({ x: winWidth - e.clientX, y: winHeight - e.clientY });
    setMouseLeave(false);
    return onMouseLeave();
  }

  const limiterNum = 3.5;

  const oneStyle = {
    left: -position.x / limiterNum + "px",
    top: -position.y / limiterNum + "px",
    transition: mouseLeave ? "all 0.5s ease" : "none"
  };
  const twoStyle = {
    left: +position.x / limiterNum + "px",
    top: -position.y / limiterNum + "px",
    transition: mouseLeave ? "all 0.5s ease" : "none"
  };
  const threeStyle = {
    left: -position.x / limiterNum + "px",
    top: +position.y / limiterNum + "px",
    transition: mouseLeave ? "all 0.5s ease" : "none"
  };
  const fourStyle = {
    left: position.x / limiterNum + "px",
    top: position.y / limiterNum + "px",
    transition: mouseLeave ? "all 0.5s ease" : "none"
  };
  console.log("this", position.x, position.y);
  return (
    <div className="container" onMouseMove={mouseMove} ref={containerRef}>
      <div className="circles"></div>
      <div className="circles" style={oneStyle}></div>
      <div className="circles" style={twoStyle}></div>
      <div className="circles" style={threeStyle}></div>
      <div className="circles" style={fourStyle}></div>
    </div>
  );
}

export default App;
