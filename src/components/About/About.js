import './About.scss';
import Psicologa from '../../assets/psicologa.jpg'

function About () {
    return (
        <>
            <div className="about-container">
                <div className='about-image-container'>
                    <img src={Psicologa} alt="" />
                </div>
            </div>
        </>
    )
}

export default About;