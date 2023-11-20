import "../css/Nav.css";
import  html from '../svgicons/html.svg';
import css from '../svgicons/css.svg';
import javascript from '../svgicons/javascript.svg';
import java from '../svgicons/java.svg';
import python from '../svgicons/python.svg';
import reactjs from '../svgicons/reactjs.svg';
import vscode from '../svgicons/vscode.svg';
import c from '../svgicons/c.svg';
import git from '../svgicons/git.svg';
function Skills() {
  return (
    <>
      <center>
        <div className="inner">
          <div className="header">
            <h1>My Skills</h1>
          </div>
          <div className="container">
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={html} alt="html" className="skills-icon"></img>
                </div>
                <h3>HTML</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={css} alt="css"  className="skills-icon"></img>
                </div>
                <h3>CSS</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={javascript} alt="javascript"  className="skills-icon"></img>
                </div>
                <h3>Javascript</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={java} alt="java"  className="skills-icon"></img>
                </div>
                <h3>Java</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={python} alt="python"  className="skills-icon"></img>
                </div>
                <h3>Python</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={reactjs} alt="reactjs"class="skills-icon"></img>
                </div>
                <h3>ReactJS</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={c} alt="c"  className="skills-icon"></img>
                </div>
                <h3>C</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={vscode} alt="vscode"  className="skills-icon"></img>
                </div>
                <h3>VS Code</h3>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img src={git} alt="git"  className="skills-icon"></img>
                </div>
                <h3>Git Bash</h3>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
export default Skills;
