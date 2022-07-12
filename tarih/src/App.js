import { Navbar } from "./components/navbar";
import { Left } from "./components/content/content-left";
import { Right } from "./components/content/content-right";

const App = () => (
  <div className="main">
    <Navbar />
    <div className="main-content">
      <Left />
      <Right />
    </div>
  </div>
);

export default App;