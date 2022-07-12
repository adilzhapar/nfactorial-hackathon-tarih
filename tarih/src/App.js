import { Navbar } from "./components/navbar";
import { Left } from "./components/content/content-left";
import { Right } from "./components/content/content-right";
import { useState, useEffect } from "react";

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

  return (
    <div className="main">
      <Navbar />
      <div className={isLine ? "line" : "not-line"}>{year} year</div>
      <div className="main-content">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default App;
