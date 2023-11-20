import "../css/Nav.css";
function Contact() {
  return (
    <>
      <div className="contact">
    <div className="table_container">
        <h1 className="con">Contact Me</h1>
            <form action="">
                <label>Name:</label>
                <input type="text" id="name" placeholder="Please enter Your Name"/>
        
                
                <label>Email:</label>
                <input type="text" id="email" placeholder="Please enter Your email"/>
            
                   
            <div className="btn">
                    <button type="submit">Reach out to me</button>
            </div>
            </form>
        </div>
        </div>
    </>
  );
}
export default Contact;
