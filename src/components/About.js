import "../css/Nav.css";
import me from "../Images/me.jpg";
function About() {
  return (
    <>
      <div id="about">
        <div class="container-about">
          <div class="row">
            <div class="about-col-1">
              <img className="myself" src={me} width={300} height={400}  alt="about"></img>
            </div>
              <div class="about-col-2">
                <h1 class="sub-title">About Me</h1>
                <p>
                 <em>I am a <span>Developer</span><br></br>
                  I am Abhirama P, currently pursuing my BE in Computer Science
                  and Engineering from Canara Engineering College.currently I am in 
                  my 5th sem.I am an enthusiastic learner.I have done 2 projects in
                  Front End.I have participated in inter-college fests and hackathons.</em>
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );  
}
export default About;
