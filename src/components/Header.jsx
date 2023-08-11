// Header.jsx
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import BurguerCode from './Hamburguer.jsx';

function Header() {
const [isVisible, setIsVisible] = useState(false);

const toggleNav = () => {
setIsVisible(!isVisible);
};

return (
<header>
        <img src={Logo} alt="logo jm" />
        <BurguerCode toggleNav={toggleNav} />
        
            < nav>
    <ul 
            className={`nav-list ${isVisible ? 'visible' : ''}`}
            style={{ maxHeight: isVisible ? '500px' : '0', opacity: isVisible ? 1 : 0 }}
            >
        <li data-text="Home">
        <span className="actual-text">Home</span>
        <span className="front-text"></span>
        </li>
        <li data-text="About">
        <span className="actual-text">About</span>
        <span className="front-text"></span>
        </li>
        <li data-text="Project">
        <span className="actual-text">Project</span>
        <span className="front-text"></span>
        </li>
        <li data-text="Contact">
        <span className="actual-text">Contato</span>
        <span className="front-text"></span>
        </li>
    </ul>
    </nav>
</header>
);
}

export default Header;

