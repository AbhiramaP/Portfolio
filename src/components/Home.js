import "../css/Nav.css";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Certificates from "./Certificates";
function Home() {
  return (
    <>
      <About />
      <Skills />
      <Certificates/>
      <Education/>
      <Contact/>
    </>
  );
}
export default Home;
