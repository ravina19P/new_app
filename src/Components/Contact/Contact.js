import React from 'react';
import Styles from './Contact.module.css';
const Contact = () => {
    return (
        <div style={{ overflowX: 'hidden', marginBottom: '50px' }} className='animate__animated animate__fadeInLeft animate__delay-5s'>
            <div className='row'>
                <div className='col-md-7 ' style={{
                    background: 'radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)',
                    borderRadius: '0 40% 40% 0',
                    maxHeight: '700px'
                }}>
                    <div className={`text-start ${Styles.CONTACT}`}>
                        <p style={{ fontSize: '27px', color: '#fff', fontWeight: '600', marginTop: '30px' }}>
                            Feel free to contact us anytime
                        </p>
                        <p style={{ color: '#fff', fontWeight: '600', marginTop: '30px' }}>
                            Mail your query at <a href="mailto:supports@algorooms.com" className={`${Styles.email}`}>supports@algorooms.com</a>
                        </p>
                        <p style={{ color: '#fff', fontWeight: '600', marginTop: '30px' }}>
                            Reach out to us at : +917042132888
                        </p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className={`${Styles.Form}`}>
                        <h3 className='m-3'>Contact Us</h3>
                        <div className='row'>
                            <div className='col-md-12'>
                                <input type='text' placeholder='Your Name...' className={`${Styles.Form_Input}`}></input>
                            </div>
                            <div className='col-md-12'>
                                <input type='text' placeholder='Your E-mail...' className={`${Styles.Form_Input}`}></input>
                            </div>
                            <div className='col-md-12'>
                                <textarea type='text' placeholder='Your Message' className={`${Styles.textArea}`}></textarea>
                            </div>
                            <div className='col-md-12'>
                                <button type="submit" className={`${Styles.Message_BTN}`}>
                                    Send Message Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;