import React from 'react';
import Newhero from '../Assets/NewHero.svg';
import styles from './Home.module.css';
import Features from '../Features/Features';
import Navigate from '../Navigate/Navigate ';
import Price from '../Pricing/Price';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div style={{ padding: "60px", borderRadius: '0 0 30% 30%', background: 'linear-gradient(90deg, rgba(9,71,161,1) 24%, rgba(33,154,222,1) 93%)' }}>
                <div className={`row  ${styles.HomeBlock}`}>
                    <div className='col-md-6 text-start'>
                        <h1 className='text-white font-weight-bold mb-2' style={{ fontSize: '45px', lineHeight: '61px' }}>Trade Smarter, <br></br> Not Harder</h1>
                        <h4 className='text-white font-weight-bold mb-4'> Where efficiency meets success</h4>
                        <p className='text-white mb-5'>
                            Our goal is to simplify the investment process, <br></br>
                            making it as effortless as possible, even if you're new to
                            investing.
                        </p>
                        <button className={`${styles.btnHome}`}>Get Started</button>
                    </div>
                    <div className='col-md-6'>
                        <img src={Newhero} alt='logo' style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
                <Features></Features>
                <Navigate></Navigate>
                <Price></Price>
                <Testimonials></Testimonials>
                <Contact></Contact>
                <Footer></Footer>
        </div>
    );
};

export default Home;