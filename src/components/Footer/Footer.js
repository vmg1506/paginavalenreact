import './Footer.scss'
import Line from '../../assets/line_1.svg'
import FacebookLogo from '../../assets/icons/facebook_1.svg'
import InstagramLogo from '../../assets/icons/instagram.svg'
import LinkedinLogo from '../../assets/icons/linkedin.svg'


function Footer () {
    return (
        <div className="footer-container p-4" >
            <div className='footer-social-container'>
                <img className="white-line" src={Line} alt="" />
                <img className='social-icon' src={FacebookLogo} alt="" />
                <img className='social-icon' src={InstagramLogo} alt="" />
                <img className='social-icon' src={LinkedinLogo} alt="" />
                <img className="white-line" src={Line} alt="" />
            </div>
            <div className='footer-info'>
                <h3>Valentina Grand Jaramillo, Psicóloga</h3>
            </div>
        </div>
    )
}

export default Footer;