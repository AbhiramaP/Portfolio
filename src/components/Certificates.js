import "../css/Nav.css";
import Card from "./Card";
function Certificates (){
  const skills=[
    {
      h:"Introduction to C programming",
      i:"Introductiontoc"
    },
    {
      h:"HTML,CSS and JS for Web Developers",
      i:"Webdevelopment"
    }
  ]
  return(
    <>
    <center>
      {
        skills.map((item)  =>(
          <Card skills={item}/>
        ))
      }
    </center>
    </>
  );
}
export default Certificates;