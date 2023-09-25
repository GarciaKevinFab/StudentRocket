import "./about.css";
import Logo from "../../img/STUDENTROCKET.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Logo}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre Nosotros</h1>
        <p className="a-sub">
        Student Rocket es una de las principales empresas encargadas de solucionarte y 
        apoyarte a ser más útil, en tus deberes de la escuela, colegio, instituto y universidad fundada en Cusco-Perú.
        </p>
        <p className="a-desc">
        Somos una empresa peruana con más de dos años de experiencia iniciamos en el año 2020 con la idea de apoyar a los estudiantes, nos 
        encargamos de proporcionar soluciones integrales basadas en nuestra tecnología y conocimiento, con nuestra amplia variedad de 
        servicios orientamos la satisfacción de los diferentes clientes. Student Rocket tiene alianzas estratégicas con diversos 
        profesores de todas las universidades y colegios, expertos en cada una de las materias que necesitarás, garantizamos 
        siempre los mejores resultados conforme a lo que usted especifique además de eso también contamos con un equipo estratégico de 
        profesionales las 24 horas que se encargarán de brindar la mejor atención para usted con la visión de convertirnos así en un 
        pilar en Educación y Servicio y Soluciones para todos los clientes.
        </p>
      </div>
    </div>
  );
};

export default About;