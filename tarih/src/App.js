import { Navbar } from "./components/navbar";
import { Left } from "./components/content/content-left";
import { Right } from "./components/content/content-right";
import { useState, useEffect } from "react";

import end from "./assets/tobecontinued.webp";

const App = () => {
  const [year, setYear] = useState(1445);
  const [isLine, setIsLine] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      // console.log('window.scrollY', window.scrollY);
      const height = parseInt(window.scrollY);
      if(year + parseInt(height / 20) <= 2022){

        setYear(year + parseInt(height / 20));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (year >= 1450) {
      setIsLine(true);
    }
    if (year <= 1450) {
      setIsLine(false);
    }
  });

  useEffect(() => {
    if(year >= 1900){
      // document.body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/8/86/The_New-York_Daily_Times_first_issue.jpg)';
      
      document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://upload.wikimedia.org/wikipedia/commons/8/86/The_New-York_Daily_Times_first_issue.jpg)';
    }
    if(year <= 1900){
      document.body.style.backgroundImage = 'url(https://img.freepik.com/premium-photo/old-paper-texture-vintage-paper-background_262663-434.jpg?w=2000)';
    }
  }, [year])

  return (
    <div className="main">
      <Navbar />
      <div className={isLine ? "line" : "not-line"}>{year} year</div>
      <div className="main-content">
        <Left year={year}/>
        <Right year={year} />
      </div>
      <div className="end">
        <img src={end} alt="my-end"></img>
      </div>
    </div>
  );
};

export default App;
