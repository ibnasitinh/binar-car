import './../style/footer.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container container-footer">
        <div className="row">
          <div className="col-md-3">
            <div className="address description">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
            <ul className='contact p-0'>
              <li> <a href="mailto:binarcarrental@gmail.com" className='description'>binarcarrental@gmail.com</a></li>
              <li> <a href="tel:081233334808" className='description'>081-233-334-808</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className='footbar'>
              <ul>
                <li>Our Service</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className='connect_with_us'>
              <h5 className='description'>Connect With us</h5>
              <ul>
                <li> <NavLink to={"#"}><img src="/images/icon_facebook.png" alt='icon_facebook' /></NavLink></li>
                <li> <NavLink to={"#"}><img src="/images/icon_instagram.png" alt='icon_instagram' /></NavLink></li>
                <li> <NavLink to={"#"}><img src="/images/icon_mail.png" alt='icon_mail' /></NavLink></li>
                <li> <NavLink to={"#"}><img src="/images/icon_twitch.png" alt='icon_twitch' /></NavLink></li>
                <li><NavLink to={"#"}><img src="/images/icon_twitter.png" alt='icon_twitter' /></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className='copyright'>
              <h5 className='description'>Copyright Binar 2022</h5>
              <img src="/images/logo.png" alt='logo' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;