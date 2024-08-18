import React from 'react';
import styles from './Features.module.css';
import background from '../Assets/dots.png';
import icon1 from '../Assets/service-icon-01.png';
import icon2 from '../Assets/service-icon-02.png';
import icon3 from '../Assets/service-icon-03.png';
import icon4 from '../Assets/service-icon-04.png';

const Features = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat' }}>
            <div className='row col-md-4 offset-4 mt-5 animate__animated animate__fadeInDown'>
                <h2 style={{ fontWeight: '400', fontSize: '40px', lineHeight: '50px' }}>Explore Our Features</h2>
                <p className={`${styles.Feature_P}`}>Unlock your investment potential with our unique tools. We make it easier for you to enter the intricate realm of capital trading with revolutionary AI-powered capabilities.</p>
            </div>
            <div className={`container ${styles.container}`}>
                <div className='row' style={{padding:'60px'}}>
                    <div className='col-md-3 animate__animated animate__fadeInLeft animate__delay-1s'>
                        <div className={`card ${styles.card}`} style={{ width: '15rem', height: '250px', borderTopRightRadius: '50px',marginTop: '30px' }}>
                            <div className="card-body">
                                <img src={icon1} alt='icon1' className="d-flex justify-content-start" />
                                <h5 className="card-title text-start mt-3">Trading Engine</h5>
                                <p className="card-text text-start">
                                    An intelligent tool for automated trading, executing trades
                                    based on user-defined rules.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 animate__animated animate__fadeInLeft animate__delay-1s'>
                        <div className={`card ${styles.card}`} style={{ width: '15rem',height: '300px', borderTopRightRadius: '50px' }}>
                            <div className="card-body">
                                <img src={icon2} alt='icon2' className="d-flex justify-content-start" />
                                <h5 className="card-title text-start mt-3">Strategy Bulding Wizard</h5>
                                <p className="card-text text-start">
                                    Revolutionizing trading by offering smart strategies without
                                    coding. Users can create and sell ideas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 animate__animated animate__fadeInRight animate__delay-1s'>
                        <div className={`card ${styles.card}`} style={{ width: '15rem',height: '300px', borderTopRightRadius: '50px' }}>
                            <div className="card-body">
                                <img src={icon3} alt='icon3' className="d-flex justify-content-start" />
                                <h5 className="card-title text-start mt-3">Social Trading</h5>
                                <p className="card-text text-start">
                                    Choose trader strategies based on performance, replicate
                                    their actions in your portfolio, even without expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 animate__animated animate__fadeInRight animate__delay-1s'>
                        <div className={`card ${styles.card}`} style={{ width: '15rem', height: '250px', borderTopRightRadius: '50px',marginTop: '30px' }}>
                            <div className="card-body">
                                <img src={icon4} alt='icon4' className="d-flex justify-content-start" />
                                <h5 className="card-title text-start mt-3">BackTesting</h5>
                                <p className="card-text text-start">
                                    Manage trading differences using three backtesting options,
                                    with the worst-case scenario.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
