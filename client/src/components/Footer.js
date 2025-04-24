import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="chess-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h5>LOKI Chess</h5>
                    <p>Play chess online with friends or challenge the computer.</p>
                </div>
                <div className="footer-section">
                    <h5>Quick Links</h5>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/g/leaderboard">Leaderboard</Link></li>
                        <li><Link to="/g/computer">Play vs Computer</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>Connect</h5>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon" aria-label="Discord"><i className="fab fa-discord"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} LOKI Chess. All rights reserved.</p>
                {/* <p className='developed'>Developed by <a href="https://xdev.onrender.com/" target="_blank" rel="noopener noreferrer" className="developer-name">xDev Solutions</a></p> */}
            </div>
        </footer>
    );
}

export default Footer;
