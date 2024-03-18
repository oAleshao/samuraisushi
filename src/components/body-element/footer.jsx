import React from 'react';
import telegram from '../../img/telegram-icon.png'
import instagram from '../../img/instagram-icon.png'
import twitter from '../../img/x-icon.png'



const Footer = () => {
    return (
        <div id='footer'>
            <section className='main-part-footer'>
                <h1>Samurai Sushi</h1>
                <h2>© 2019 - 2024</h2>
            </section>
            <section className='link-part-footer'>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Contacts</a></li>
                </ul>
            </section>
            <section className='link-part-footer'>
                <ul>
                    <li><a href="/">Employees</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Cafe on cart</a></li>
                </ul>
            </section>
            <section className='social-media-footer'>
                <ul>
                    <li><a href="/"><img src={telegram} alt="telegram" /></a></li>
                    <li><a href="/"><img src={instagram} alt="instagram" /></a></li>
                    <li><a href="/"><img src={twitter} alt="twitter" /></a></li>
                </ul>
            </section>
        </div>
    );
}

export default Footer;
