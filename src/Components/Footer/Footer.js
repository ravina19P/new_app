import React from 'react';
import Styles from './Footer.module.css';
import logo from '../Assets/Logowhite.svg'
import logo2 from '../Assets/black-full-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1a1b1f', padding: '20px 0' }}>
            <div className={`${Styles.footer_main} container-fluid`}>
                <div className='row'>
                    <div className='col-md-4'>
                        <div>
                            <img src={logo} alt='logo' style={{ height: '50px', width: '200px' }}></img>
                            <p style={{ fontSize: '16', lineHeight: '20px', color: '#808080', marginTop: "10px" }}>Charts Powered by</p>
                            <a href="https://in.tradingview.com/" target="_blank"> <img src={logo2} alt='logo' style={{ height: '40px', width: '100px', marginRight: '25px', filter: 'invert(1)' }}></img></a>
                            <div className={`${Styles.footer_div}`}>
                                <p>Reykle India Private Limited</p>
                                <p>CIN - U66120MP2022PTC060149</p>
                                <p>Reykle India Private Limited</p>
                                <p> Telephone 120-457-6454 </p>
                                <p>Mobile +91-704213288 </p>
                            </div>
                            <a href='https://www.youtube.com/watch'> <FontAwesomeIcon icon={faYoutube} className={Styles.icon} /> </a>
                            <a href='https://www.instagram.com/Google'> <FontAwesomeIcon icon={faInstagram} className={Styles.icon} /></a>
                            <a href='http://www.thefacebook.com'> <FontAwesomeIcon icon={faFacebook} className={Styles.icon} /></a>
                            <a href='www.linkedin.com/in'> <FontAwesomeIcon icon={faLinkedin} className={Styles.icon} /></a>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className={`${Styles.ListItems}`}>
                            <ul>
                                <li><a href='/Home'>Home</a></li>
                                <li><a href='/Features'>Features</a></li>
                                <li><a href='/Contact'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className={`${Styles.ListItems}`}>
                            <ul>
                                <li><a href='/Pricing'>Pricing</a></li>
                                <li><a href='/Privacy_Policy'>Privacy Policy</a></li>
                                <li><a href='/Refund_Policy'>Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row  container-fluid' style={{ borderRadius: "15%", paddingLeft: '150px', paddingRight: '150px' }}>
                <div className={`${Styles.Terms}`}>
                    <h5>Terms of Use</h5><hr></hr>
                    <div>
                        <p><strong>TERMS AND CONDITIONS : </strong> By visiting our site
                            “algorooms.com" you ("you" refers to the user or viewer of the
                            Website) are agreeing to be bound by the following terms and
                            conditions and the Privacy Policy on the Website.
                        </p>
                        <p><strong>REGISTRATION AND TERMINATION : </strong> By
                            registering for this facility you understand that algorooms
                            and its directors, employees and associates reserve the right,
                            in its sole discretion, to deny you access to this Website or
                            any portion thereof without notice for various reasons.
                        </p>
                        <p><strong>LICENSE : </strong> Algorooms grants to you a
                            non-exclusive royalty-free revocable license to view, copy,
                            and store this website and the material on this website for
                            personal non-commercial use.
                        </p>
                        <p><strong>ENFORCEMENT OF COPYRIGHT : </strong>Algorooms takes
                            the protection of its copyright materials very seriously. If
                            Algorooms discovers that you have used our copyright materials
                            in contravention of the license above, ALGOROOMS may bring
                            legal proceedings against you for an injunction to stop you
                            using those materials and monetary damages.
                        </p>
                        <p><strong>SECURITY : </strong> Unauthorized use of this Website
                            and systems, including, but not limited to, unauthorized entry
                            into Algorooms’s systems, online accounts, misuse of passwords
                            is strictly prohibited.
                        </p>
                        <p><strong>STRATEGY INTELLECTUAL PROPERTY :  </strong>  The
                            intellectual property of the strategy logic and configuration
                            will solely and exclusively belong to the strategy creator.
                        </p>
                        <p><strong>CAVEAT EMPTOR :</strong>  Indian laws require
                            Portfolio managers and Investment Advisory Service providers
                            to be registered under SEBI. US Laws do not have any such
                            requirement.
                        </p>
                        <p><strong>SERVICE DELAYS : </strong>  Algorooms reserves its
                            right to change, improve or correct the information, materials
                            and descriptions on this website and to suspend and/or deny
                            access to this web site for scheduled or unscheduled
                            maintenance.
                        </p>
                        <p><strong>LIABILITY :</strong>   You agree that Algorooms shall
                            not be liable for any direct, special, indirect, consequential
                            or incidental damages arising out of the use or inability to
                            use www.algorooms.com.
                        </p>
                        <p><strong>INDEMNIFICATION : </strong>    You shall indemnify,
                            defend and hold harmless Algorooms from any and all claims and
                            losses imposed on, incurred by or asserted as a result of or
                            related to your access and use of www.algorooms.com.
                        </p>
                        <p><strong>ENTIRE AGREEMENT : </strong> This User Agreement
                            constitutes the entire agreement between the parties.
                        </p>
                        <p><strong>DISCLAIMER : </strong>  The information made available
                            is for educational purposes only. Algorooms does not recommend
                            or advocate the buying, selling, or holding of any investment.
                        </p>
                        <p>
                            If you have any questions or concerns about these Terms,
                            please contact us at <a href='supports@algorooms.com'>supports@algorooms.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bg-dark py-4 text-center ${Styles.footer_bottom}`}>
                <small className='text-secondary'>Copyright © 2024 . All rights reserved to <a href="https://algorooms.com/">Algorooms</a>
                </small>
            </div>
        </div>
    );
};

export default Footer;