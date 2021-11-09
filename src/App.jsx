import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";






function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
