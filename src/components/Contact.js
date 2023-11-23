import "../css/Nav.css";
import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import Loader from "./Loader";
function Contact() {
  const form = useRef();
  const [loader,setLoader]=useState(true);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(false);
    emailjs
      .sendForm(
        "service_fgtgr7b",
        "template_monk482",
        form.current,
        "kX7FiGDLE8zF4NyhS"
      ) 
      .then(
        (result) => {
          alert("Message sent"); 
          setLoader(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact">
        <div className="table_container">
          <h1 className="con">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name:</label>
            <input className="un"
              type="text"
              id="name"
              name="Username"
              placeholder="Please enter Your Name"/>
            <label>Email:</label>
            <input
              type="text"
              id="email"
              name="Email"
              placeholder="Please enter Your email"/>
              <label>Suggestions:</label>
            <input
              type="text"
              id="suggestion"
              name="Suggestion"
              placeholder="Any suggestions??"/>
            <div className="btn">
              {
                loader ? (
                  <>
                    <button type="submit">Send message</button>
                  </>
                ) : (
                  <Loader/>
                )}
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}
export default Contact;
