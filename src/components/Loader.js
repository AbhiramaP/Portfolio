import "../css/Nav.css";
import load from "../svgicons/load.gif";
function Loader(){
  return(
    <>
      <img src={load} width={100} height={100} alt="buffer"></img>
    </>
  );
}
export default Loader;