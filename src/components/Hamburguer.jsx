// Hamburguer.jsx
import React from 'react';
import '../styles/burguer.css';

function BurguerCode({ toggleNav }) {
    return (
        <div>
        <button type="button" onClick={toggleNav} className="hamburguer">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
        </div>
    );
}

export default BurguerCode;
