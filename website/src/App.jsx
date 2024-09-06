import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Events } from "./components/Events";
import { Jobs } from "./components/Jobs";
import { Menu } from "./components/Menu";
import { Navigation } from "./components/Navigation";
import { Order } from "./components/Order";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <About />
        <Menu />
        <Order />
        <Events />
        <Jobs />
      </main>
      <Contact />
    </>
  );
}

export default App;

//

//

//
{
  /* 
import reactLogo from "./assets/react.svg";

  <div>
        <a href="https://react.dev" target="_blank" id="react-logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */
}
