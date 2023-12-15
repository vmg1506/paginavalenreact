import './NavBar.scss'
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <div className="navbar-container fs-5">
            <ul className="navbar">
                <Link className="li" to="/">Home</Link>
                <Link className="li" to="Contact">Contacto</Link>
                <Link className='li' to="About-Me">Sobre Mi</Link>
            </ul>
        </div>
    )
}

export default NavBar;