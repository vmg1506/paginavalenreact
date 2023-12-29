import './About.scss';
import Psicologa from '../../assets/psicologa.jpg'
import Niños from '../../assets/niño.png'
import Adolescente from '../../assets/adolescente.png'
import Adulto from '../../assets/adulto.png'
import AboutCard from './AboutCard.js';



function About () {
    return (
        <>
            <div className='about'>
                <div className='aboutme-container h-auto'>
                    <div className='row'>
                        <div 
                                data-aos="zoom-out-up" 
                                data-aos-easing="ease-in-sine" 
                                data-aos-delay="300" data-aos-duration="2000" 
                                className='col d-flex justify-content-center align-items-center'>
                            <img className='h-100 w-75 rounded-4' src={Psicologa} alt="" />
                        </div>
                        <div 
                        data-aos="flip-left"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        className='col d-flex align-items-center'>
                            <div>
                                <p className='fs-1 fw-bold'>Valentina Grand Jaramillo</p>
                                <p className='fs-5 fw-semibold'>Profesional En Psicología, Universidad Luis Amigó</p>
                                <p className='fs-5 fw-semibold'>Maestrante En Psicología Clínica, Universidad De Manizales</p>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row w-100 py-5 justify-content-center'>
                            <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="2000" className='col fst-italic text-center fs-5'>
                                "Considero que todas las personas cuentan con recursos potenciales para afrontar dificultades y por medio de la psicoterapia se logra activar todo ese conjunto de recursos personales que les permitirán enfrentarse a la vida con una adecuada conciencia de si mismo y del entorno."
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-experience-container'>
                        <div className='about-experience-text'>
                            <div className='texto text-center'>
                                <p data-aos="zoom-out-right" data-aos-delay="300" className='fs-5 text-dark fw-semibold'>
                                    Tengo experiencia en psicoterapia individual en niños, adolescentes y adultos en el abordaje de problemáticas como: trastornos afectivos, ansiedad, depresión, duelo por ruptura o pérdida, dificultades en habilidades sociales, toma de decisiones, autoestima y autoconfianza, autorregulación emocional, orientación vocacional, pautas de crianza, psicoterapia de pareja y familia en asuntos como resolución de conflictos, acuerdos y fortalecimiento del vínculo.
                                </p>
                            </div>
                        </div>
                        <div className='about-experience-people'>
                                        <div data-aos="flip-left" data-aos-delay="400" className='about-card-1 card h-100'>
                                            <img src={Niños} className='card-img-top w-75 h-75' alt="" />
                                            <div className='card-body'>
                                                <p className='card-text fs-4'>
                                                    Niños
                                                </p>
                                            </div>
                                        </div>
                                    <div data-aos="flip-left" data-aos-delay="700" className='about-card-2 card h-100'>
                                            <img src={Adolescente} className='card-img-top w-75 h-75' alt="" />
                                            <div className='card-body'>
                                                <p className='card-text fs-4'>
                                                    Adolescentes
                                                </p>
                                            </div>
                                        </div>
                                    <div data-aos="flip-left" data-aos-delay="900" className='about-card-3 card h-100'>
                                            <img src={Adulto} className='card-img-top w-75 h-75' alt="" />
                                            <div className='card-body'>
                                                <p className='card-text fs-4'>
                                                    Adultos
                                                </p>
                                            </div>
                                        </div>
                                    <div className='p-2 g-col-6'>
                                    </div>
                        </div>
                    
                </div>
                <AboutCard/>
            </div>
            
        </>
    )
}

export default About;