import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Dołącz do nas. Zasubskrybuj nasz newsletter
                </p>
                <p className='footer-subscription-text'>
                    Możesz zrezygnować w każdej chwili
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Twój Email'
                        />
                        <button className='footer-btn'>Subskrybuj</button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Kontakt</h2>
                        <Link to='/'>O nas</Link>
                        <Link to='/'>Kontakt</Link>
                        <Link to='/'>Współpraca</Link>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Więcej</h2>
                        <Link to='/'>Jak korzystać</Link>
                        <Link to='/'>Regulamin aplikacji</Link>
                        <Link to='/'>Polityka prywatności</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Dołącz do Nas</h2>
                        <Link to='/'>Instagram <i className='fab fa-instagram'/></Link>
                        <Link to='/'>Facebook <i className='fab fa-facebook-f'/></Link>
                        <Link to='/'>Youtube <i className='fab fa-youtube'/></Link>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;