import './Home.scss'
import Firma from '../../assets/logo_largo.png'
import Familia from "../../assets/family.png"
import Terapia from "../../assets/psicoterapy.png";
import Pareja from "../../assets/couple.png";


function Home () {
    return (
        <div className="home-container">
           <div className="home-banner-container">
                <div className="home-logo-container">
                    <img src={Firma} alt="" />
                </div>
           </div>
           <div className="home-info-container">
                <div className='home-info-container-1'> 
                    <img src={Familia} alt="" />
                    <h2>Psicoterapia Individual</h2>
                    <p>Dirigida a niños, adolescentes y adultos en asuntos como Ansiedad, depresión, duelo por ruptura o pérdida, toma de decisiones, resolución de problemas, habilidades socioemocionales, autoestima, identidad.</p>
                    
                </div>
                <div className='home-info-container-2'>
                    <img src={Terapia} alt="" />
                    <h2>Psicoterapia Familiar</h2>
                    <p>Pautas de crianza, estrategias de comunicación, fortalecimiento de vinculos.</p>
                </div>
                <div className='home-info-container-3'>
                    <img src={Pareja} alt="" />
                    <h2>Psicoterapia De Pareja</h2>
                    <p>Resolución de conflictos, toma de decisiones y acuerdos.</p>
                </div>
           </div>
           <div className='boton'>
                <button type='button' className='w-25 h-75 fs-2 btn btn-success'>Contáctame!</button>
           </div>
           
        </div>
    )
}

export default Home;