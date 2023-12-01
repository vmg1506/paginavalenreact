import './Home.scss'
import Firma from '../../assets/logo_2.png'

function Home () {
    return (
        <div className="home-container">
           <div className="home-banner-container">
                <div className="home-logo-container">
                    <img src={Firma} alt="" />
                </div>
           </div>
           <div className="d-flex justify-content-center align-content-center home-info-container">
                <p>Pautas de crianza, estrategias de comunicación, fortalecimiento de vinculos.</p>
           </div>
        </div>
    )
}

export default Home;