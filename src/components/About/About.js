import './About.scss';
import Psicologa from '../../assets/psicologa.jpg'
import Cerebro from "../../assets/cerebro_1.png"

function About () {
    return (
        <>
            <div className='about'>
                <div className='aboutme-container h-auto'>
                    <div className='row'>
                        <div className='col d-flex justify-content-center align-items-center'>
                            <img className='h-100 w-50 rounded-4' src={Psicologa} alt="" />
                        </div>
                        <div className='col d-flex align-items-center'>
                            <div>
                                <p className='fs-1 fw-bold'>Valentina Grand Jaramillo</p>
                                <p className='fs-5 fw-semibold'>Profesional En Psicología, Universidad Luis Amigó</p>
                                <p className='fs-5 fw-semibold'>Maestrante En Psicología Clínica, Universidad De Manizales</p>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row w-100 py-5 justify-content-center'>
                            <div className='col fst-italic text-center fs-5'>
                                "Considero que todas las personas cuentan con recursos potenciales para afrontar dificultades y por medio de la psicoterapia se logra activar todo ese conjunto de recursos personales que les permitirán enfrentarse a la vida con una adecuada conciencia de si mismo y del entorno."
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-experience-container'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                Tengo experiencia en psicoterapia individual en niños, adolescentes y adultos en el abordaje de problemáticas como: trastornos afectivos, ansiedad, depresión, duelo por ruptura o pérdida, dificultades en habilidades sociales, toma de decisiones, autoestima y autoconfianza, autorregulación emocional, orientación vocacional, pautas de crianza, psicoterapia de pareja y familia en asuntos como resolución de conflictos, acuerdos y fortalecimiento del vínculo.
                            </div>
                        </div>
                        <div className='col'>
                            <img src={Cerebro} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;