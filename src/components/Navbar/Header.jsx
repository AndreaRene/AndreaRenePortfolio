import './Header.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CloseButton from "../../assets/closebutton.svg";
import OpenButton from "../../assets/menubutton.svg";

const Header = ( { setContent } ) => {
    const [activePage, setActivePage] = useState( 'about' );
    const [isMenuOpen, setIsMenuOpen] = useState( false );

    const handleLinkClick = ( event ) => {
        const pageId = event.target.id;
        setActivePage( pageId );
        setContent( pageId );
        setIsMenuOpen( false );
    };

    const toggleMobileMenu = () => setIsMenuOpen( !isMenuOpen );

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */ }
                <div>
                    <p className='navbar-logo'>Andrea René</p>
                </div>

                {/* Links for desktop */ }
                <nav className={ isMenuOpen ? "navbar-links active" : "navbar-links" }>
                    <ul>
                        <li>
                            <a
                                href="#about"
                                id="about"
                                className={ activePage === 'about' ? 'active' : '' }
                                onClick={ handleLinkClick }
                            >
                                Who I Am
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                id="portfolio"
                                className={ activePage === 'portfolio' ? 'active' : '' }
                                onClick={ handleLinkClick }
                            >
                                What I&rsquo;ve Done
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                id="contact"
                                className={ activePage === 'contact' ? 'active' : '' }
                                onClick={ handleLinkClick }
                            >
                                Let&rsquo;s Connect
                            </a>
                        </li>
                        <li>
                            <a
                                href="#resume"
                                id="resume"
                                className={ activePage === 'resume' ? 'active' : '' }
                                onClick={ handleLinkClick }
                            >
                                Resumé
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile menu toggle */ }
                <div className="mobile-menu-icon" onClick={ toggleMobileMenu }>
                    { isMenuOpen ? (
                        <img src={ CloseButton } alt="Close menu button" />
                    ) : (
                        <img src={ OpenButton } alt="Open menu button" />
                    ) }
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    setContent: PropTypes.func.isRequired,
};

export default Header;
