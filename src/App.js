import "./styles.css";
import { useState } from "react";

export default function App() {
  const [countstate, setCountstate] = useState(0);

  const handleClick = () => {
    if (countstate === 10) {
      setCountstate(0);
    } else {
      setCountstate(countstate + 2);
    }
  };
  return (
    <div className="App">
      <div className="progress" style={{ width: 100, height: 10 }}>
        <div
          className="item"
          style={{ width: countstate * 10, height: 10, backgroundColor: "red" }}
        ></div>
      </div>
      <button onClick={handleClick}>Click ME</button>
    </div>
  );
}
//prgress bar top
// button click me

// Well-versed in Web/Frontend technologies and frameworks like Spring MVC,
//Node.JS, React, Marko, HTML5, CSS3 with LESS or SASS,
//JavaScript, JSP, Ajax, JQuery are required.
// Craft optimized CSS with LESS or SASS.

// Experienced in non-functional skills like Security, Accessibility,
//Site Speed optimization, Cross-browser /Cross-platform UX Design.

// Ensure code quality and maintainability by evolving architecture and tech stack,
//refactoring, standards and improving build and test systems
// Familiarity with CI/CD pipelines using Jenkins
