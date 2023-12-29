import './About.scss';
import { useNavigate } from 'react-router-dom';
/* import Sistemico from '../../assets/sistemico.jpg' */

function AboutCard () {

    const navigate = useNavigate();

    return (
        <>
            <div className='about-card-container d-flex justify-content-center py-5'>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <div data-aos="zoom-in" className='flip-container'>
                            <div className='card-container'>
                                <div className='card-container-items front'>
                                    <p className='fs-3'>Terapia</p>
                                    <p className='fs-3'>Individual</p>
                                    <p className='fs-5'>Sesión</p>
                                    <p className='fs-3'>$70.000</p>
                                </div>
                                <div className='back'>
                                    <button onClick={ () => navigate("/Contact") } type='button' className='btn btn-primary'>Contáctame!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div data-aos="zoom-in" className='flip-container'>
                            <div className='card-container'>
                                <div className='card-container-items front'>
                                    <p className='fs-3'>Terapia</p>
                                    <p className='fs-3'> Pareja</p>
                                    <p className='fs-5'>Sesión</p>
                                    <p className='fs-3'>$80.000</p>
                                </div>
                                <div className='back'>
                                <button onClick={ () => navigate("/Contact") } type='button' className='btn btn-primary'>Contáctame!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div data-aos="zoom-in" className='flip-container'>
                            <div className='card-container'>
                                <div className='card-container-items front'>
                                    <p className='fs-3'>Terapia</p>
                                    <p className='fs-3'>Familiar</p>
                                    <p className='fs-5'>Sesión</p>
                                    <p className='fs-3'>$80.000</p>
                                </div>
                                <div className='back'>
                                <button onClick={ () => navigate("/Contact") } type='button' className='btn btn-primary'>Contáctame!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-focus-container text-center fs-2 d-flex justify-content-center py-5'>
                    <p className='w-75'>Trabajo desde una perspectiva sistémica, la cual posibilita la resignificación de historias, emociones, pensamientos y vínculos, a través de diferentes técnicas propias de la terapia narrativa y la terapia estratégica.</p>
            </div>
        </>
    )
}

export default AboutCard;