import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "StudentRocket",
        "template_2hi17be",
        formRef.current,
        "HYZ1_WPzv9-48ihGL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contacto</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +51 991951234
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              studentrocket.eirl@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Alguna Duda?</b> Siempre disponible para atenderlo.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre" name="user_name" required />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Asunto" name="user_subject" required />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" required />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensaje" name="message" required />
            <button>Enviar</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;