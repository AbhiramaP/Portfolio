import "../css/Nav.css";
import Introductiontoc from "../Images/Introductiontoc.jpg";
import Webdevelopment from "../Images/Webdevelopment.jpg";
function Card({skills}){
  const img=(value)=> {
    if(value==="Introductiontoc"){
      return Introductiontoc;
    }
    else if(value==="Webdevelopment")
    {
      return Webdevelopment;
    }
    }
  return(
    <>
    <div>
    <h1>{skills.h}</h1>
    <img src={img(skills.i)}
    width={400}
    height={300}></img>
    </div>
    </>
  );
}
export default Card;