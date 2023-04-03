import './../style/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container-navbar'>
        <nav>
            <div className='row'>
                <div className='col-md-4'>
                    <img className='nav-logo' src="/images/logo.png" alt='logo' />
                </div>
                <div className='col-md-8 nav-ul'>
                      <ul class="nav justify-content-end">
                          <li>
                              <Link to="/">Our Services</Link>
                          </li>
                          <li>
                              <Link to="/">Why Us</Link>
                          </li>
                          <li>
                              <Link to="">Testimonial</Link>
                          </li>
                          <li>
                              <Link to="/">FAQ</Link>
                          </li>
                      </ul>
                </div>
            </div>
        </nav>
    </div>
  )
};

export default Navbar;