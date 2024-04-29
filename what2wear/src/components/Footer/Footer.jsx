import { Link } from "react-router-dom";

/* import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube'; */

import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="copyright-container">
          <p>
            <span>What2Wear</span> - (c) All rights reserved.
          </p>
        </div>

        {/* <div className="social-container">
          <ul className="social-media-links">

            <li>
              <Link><FacebookIcon style={{ width: '50px', height: '50px' }} /></Link>
            </li>
            <li>
              <Link><InstagramIcon style={{ width: '50px', height: '50px' }} /></Link>
            </li>
            <li>
              <Link><XIcon style={{ width: '50px', height: '50px' }} /></Link>
            </li>
            <li>
              <Link><YouTubeIcon style={{ width: '50px', height: '50px' }} /></Link>
            </li>
          </ul>
        </div> */}

        {/* <div className="legal-container">
          <ul className="legal">
            <li>
              <Link>Configuración de Cookies</Link>
            </li>
            <li>
              <Link>Política de privacidad</Link>
            </li>
            <li>
              <Link>Condiciones de uso</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};
