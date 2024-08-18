import React from 'react';
import img from '../Assets/Navigate.svg'
import styles from './Navigate.module.css';

const Navigate = () => {
    return (
        <div>
            <div className='row col-md-6 offset-3 mt-5 animate__animated animate__fadeInDown animate__delay-2s'>
                <h2 style={{ fontWeight: '400', fontSize: '35px', lineHeight: '50px' }}>Navigate the spectrum</h2>
                <p className={`${styles.Navigate_P}`}> Amateurs find guidance, experts find innovation - all on our
                    platform.
                </p>
            </div>
            <div className={`container ${styles.container}`}>
                <div className='row'>
                    <div className='col-md-6 animate__animated animate__fadeInLeft animate__delay-2s'>
                        <img src={img} alt='nav-img' className={`${styles.Navigate_img}`} />
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6 animate__animated animate__fadeInRight animate__delay-1s'>
                                <div className={`card ${styles.card}`} style={{ width: '18rem', borderTopRightRadius: '50px',margin:'30px', padding:'10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-start mt-3">Begin with signing up</h5>
                                        <p className="card-text text-start">
                                            Start your trading journey by signing up and loging into
                                            your trading account on our trading platform
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 animate__animated animate__fadeInRight animate__delay-1s'>
                                <div className={`card ${styles.card}`} style={{ width: '18rem', borderTopRightRadius: '50px',margin:'30px' , padding:'10px'}}>
                                    <div className="card-body">
                                        <h5 className="card-title text-start mt-3">Pick Your Strategy</h5>
                                        <p className="card-text text-start">
                                            Protect yourself from the ups and downs of the market by
                                            including your preferred level of risk into the trading
                                            algorithm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6  animate__animated animate__fadeInLeft animate__delay-2s'>
                                <div className={`card ${styles.card}`} style={{ width: '18rem', borderTopRightRadius: '50px',margin:'30px' , padding:'10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-start mt-3">Risk-Aware Trading</h5>
                                        <p className="card-text text-start">
                                            You can decide how to trade on our platform. Pick expert
                                            trading plans made by professionals, or make your own
                                            strategy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6  animate__animated animate__fadeInLeft animate__delay-2s'>
                                <div className={`card ${styles.card}`} style={{ width: '18rem', borderTopRightRadius: '50px',margin:'30px' , padding:'10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-start mt-3">Trade with Ease</h5>
                                        <p className="card-text text-start">
                                            Once you've adjusted everything the way you prefer, you can
                                            start your trading journey using our platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigate;