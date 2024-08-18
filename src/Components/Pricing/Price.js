import React, { useState } from 'react';
import styles from './Price.module.css'
import card_IMG1 from '../Assets/b1y.svg'
import card_IMG2 from '../Assets/by2.svg'
import card_IMG3 from '../Assets/by3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'; 

const Price = () => {
    const [activeBtn, setActiveBtn] = useState('Quarterly');

    const pricing = {
        Monthly: {
            free: '₹0',
            unlimited: '₹81',
            limited: '₹41'
        },
        Quarterly: {
            free: '₹0',
            unlimited: '₹69',
            limited: '₹41'
        },
        Yearly: {
            free: '₹0',
            unlimited: '₹58',
            limited: '₹34'
        }
    };
    const { free, unlimited, limited } = pricing[activeBtn];
    return (
        <div className='animate__animated animate__fadeInRight animate__delay-3s'>
            <div className='row col-md-4 offset-4 mt-5'>
                <h2 style={{ fontWeight: '400', fontSize: '45px', lineHeight: '61px' }}>Our pricing plan</h2>
                <p className={`${styles.Price_P}`}>Pricing That Adapts to Your Success.</p>
                <div className={`btn-group mt-4 ${styles.Btn_grp}`} role="group" aria-label="Basic example">
                    <button type="button" className={`btn ${styles.grp_btn} ${activeBtn === 'Monthly' ? styles.active : ''}`} onClick={() => setActiveBtn('Monthly')}>
                        Monthly</button>
                    <button type="button" className={`btn ${styles.grp_btn} ${activeBtn === 'Quarterly' ? styles.active : ''}`} onClick={() => setActiveBtn('Quarterly')}>
                        Quarterly</button>
                    <button type="button" className={`btn ${styles.grp_btn} ${activeBtn === 'Yearly' ? styles.active : ''}`} onClick={() => setActiveBtn('Yearly')}>
                        Yearly</button>
                </div>
            </div>
            <div className='container' style={{ padding: '50px 100px' }} >
                <div className='row'>
                    <div className='col-md-4'><div className={`card ${styles.card}`} style={{ width: '21rem', padding: '35px' }}>
                        <h6 style={{ letterSpacing: '5px', fontWeight: 'bold', textTransform: 'uppercase' }}>Free</h6>
                        <img className="card-img-top" src={card_IMG3} alt="Card image cap" style={{ height: '100px' }} />
                        <div className="card-body" style={{padding:'0px'}}>
                            <div className={`${styles.price_tag}`}>
                                <div className={styles.price_content}>
                                <h2 className="card-title">{free}</h2>
                                    <span> /day</span>
                                </div>
                            </div>
                            <div className={`${styles.List_item}`}>
                                <ul>                                  
                                    <li> <FontAwesomeIcon icon={faCheck} className={styles.icon}/> 50 Backtest Credit Points</li>
                                    <li><FontAwesomeIcon icon={faCheck}className={styles.icon} /> 5 Strategy Creation </li>
                                    <li> <FontAwesomeIcon icon={faCheck} className={styles.icon}/>No Basic + HNI & Retail Strategy Template Access </li>
                                    <li> <FontAwesomeIcon icon={faCheck} className={styles.icon}/>Reporting Console </li>
                                    <li> <FontAwesomeIcon icon={faTimes} className={styles.icon}/>No Strategy Deployment (Live & Forward) </li>
                                    <li> <FontAwesomeIcon icon={faTimes}className={styles.icon} />No Portfolio Backtesting </li>
                                </ul>
                            </div>
                            <a href="#" className={`btn btn-primary ${styles.Start_BTN}`}>Get Started</a>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='col-md-4'><div className={`card ${styles.card}`} style={{ width: '21rem', padding: '35px' }}>
                            <h6 style={{ letterSpacing: '5px', fontWeight: 'bold', textTransform: 'uppercase' }}>Unlimited Plan</h6>
                            <img className="card-img-top" src={card_IMG2} alt="Card image cap" style={{ height: '100px' }} />
                            <div className="card-body" style={{padding:'0px'}}>
                                <div className={`${styles.price_tag}`}>
                                    <div className={styles.price_content}>
                                    <h2 className="card-title">{unlimited}</h2>
                                        <span> /day</span>
                                    </div>
                                </div>
                                <div className={`${styles.List_item}`}>
                                    <ul>
                                        <li> <FontAwesomeIcon icon={faCheck} className={styles.icon}/>1500 Backtest Credit Points</li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/>50 Strategy Creations </li>
                                        <li>Basic + HNI & Retail Strategy Template Access </li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/>Reporting Console</li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/>20 Strategy Deployment (Live & Forward)</li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/>10 Strategy Portfolio Backtesting</li>
                                    </ul>
                                </div>
                                <a href="#" className={`btn btn-primary ${styles.Start_BTN}`}>Get Started</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='col-md-4'><div className={`card ${styles.card}`} style={{ width: '21rem', padding: '35px' }}>
                            <h6 style={{ letterSpacing: '5px', fontWeight: 'bold', textTransform: 'uppercase' }}>Limited Plan</h6>
                            <img className="card-img-top" src={card_IMG1} alt="Card image cap" style={{ height: '100px' }} />
                            <div className="card-body" style={{padding:'0px'}} >
                                <div className={`${styles.price_tag}`}>
                                    <div className={styles.price_content}>
                                    <h2 className="card-title">{limited}</h2>
                                        <span> /day</span>
                                    </div>
                                </div>
                                <div className={`${styles.List_item}`}>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon} />500 Backtest Credit Points</li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/>25 Strategy Creations </li>
                                        <li><FontAwesomeIcon icon={faCheck}className={styles.icon} />Basic + HNI & Retail Strategy Template Access </li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/> Reporting Console</li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/>5 Strategy Deployment (Live & Forward)</li>
                                        <li><FontAwesomeIcon icon={faCheck} className={styles.icon}/>2 Strategy Portfolio Backtesting</li>
                                    </ul>
                                </div>
                                <a href="#" className={`btn btn-primary ${styles.Start_BTN}`}>Get Started</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;