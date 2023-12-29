import './Home.scss'
import Valen from '../../assets/valen.jpg';
import Firma from '../../assets/logo_largo.png'
import Familia from "../../assets/family.png"
import Terapia from "../../assets/psicoterapy.png";
import Pareja from "../../assets/couple.png";
import  { useNavigate } from 'react-router-dom';



function Home () {
    const navigate  = useNavigate();
    

    return (
        <div className="home-container">
           <div className="home-banner-container pt-5">
                    <div data-aos="zoom-in" data-aos-delay="300" className="home-logo-container">
                        <img className='img-fluid' src={Firma} alt="" />
                    </div>
                    <div data-aos="zoom-out" data-aos-delay="500" className='home-banner-img'>
                        <img className="img-fluid" src={Valen} alt="" />
                    </div>
           </div>
           <div className="home-info-container">
                <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300" className='home-info-container-1'> 
                    <img className='img-fluid' src={Familia} alt="" />
                    <h2>Psicoterapia Individual</h2>
                    <p>Dirigida a niños, adolescentes y adultos en asuntos como Ansiedad, depresión, duelo por ruptura o pérdida, toma de decisiones, resolución de problemas, habilidades socioemocionales, autoestima, identidad.</p>
                    
                </div>
                <div className='home-info-container-2'>
                    <img data-aos="fade-down" data-aos-duration="3000" data-aos-delay="400" className='img-fluid' src={Terapia} alt="" />
                    <h2>Psicoterapia Familiar</h2>
                    <p>Pautas de crianza, estrategias de comunicación, fortalecimiento de vinculos.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500" className='home-info-container-3'>
                    <img className='img-fluid' src={Pareja} alt="" />
                    <h2>Psicoterapia De Pareja</h2>
                    <p>Resolución de conflictos, toma de decisiones y acuerdos.</p>
                </div>
           </div>
           <div className='boton'>
                <button onClick={ () => navigate("/Contact") } type='button' className='w-50 h-75 fs-2 btn btn-success'>Contacto</button>
           </div>
           
        </div>
    )
}

export default Home;