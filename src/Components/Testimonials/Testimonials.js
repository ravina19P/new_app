import React from 'react';
import Styles from './Testimonials.module.css';
import Carousel from 'react-bootstrap/Carousel';

const Testimonials = () => {
    return (
        <div style={{ overflowX: 'hidden', marginTop: '90px', marginBottom: '40px' }} className='animate__animated animate__fadeInRight animate__delay-4s'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className={`${Styles.Carouseldiv}`}>
                        <Carousel>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <p>
                                        “Trading with Algorooms has been a game-changer for me. The
                                        platform's versatility and the array of analytical tools
                                        provide a comprehensive trading experience. The real-time
                                        market data ensures I never miss a beat. Kudos to the
                                        Algorooms team for a top-notch platform”
                                    </p>
                                    <h4>Yogita Sharma</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <p>
                                        “I've tried various trading platforms, and Algorooms stands
                                        out for its reliability. The platform's stability, coupled
                                        with the excellent customer service, gives me the confidence
                                        to execute trades seamlessly. Algorooms has become my go-to
                                        for all things trading.”
                                    </p>
                                    <h4>Asad Amjad</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <p>
                                        “Algorooms has transformed my trading experience. The
                                        platform's intuitive design and robust features make it a
                                        standout choice. I appreciate the constant updates and the
                                        support from the Algorooms team. Trading has never been this
                                        smooth.”
                                    </p>
                                    <h4>Shyam Sundhar Vashishtha</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <p>
                                        “Trading with Algorooms has been a game-changer for me. The
                                        platform's versatility and the array of analytical tools
                                        provide a comprehensive trading experience. The real-time
                                        market data ensures I never miss a beat. Kudos to the
                                        Algorooms team for a top-notch platform”
                                    </p>
                                    <h4>Yogita Sharma</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <p>
                                        “I've tried various trading platforms, and Algorooms stands
                                        out for its reliability. The platform's stability, coupled
                                        with the excellent customer service, gives me the confidence
                                        to execute trades seamlessly. Algorooms has become my go-to
                                        for all things trading.”
                                    </p>
                                    <h4>Asad Amjad</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <p>
                                        “Algorooms has transformed my trading experience. The
                                        platform's intuitive design and robust features make it a
                                        standout choice. I appreciate the constant updates and the
                                        support from the Algorooms team. Trading has never been this
                                        smooth.”
                                    </p>
                                    <h4>Shyam Sundhar Vashishtha</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <p>
                                        “Trading with Algorooms has been a game-changer for me. The
                                        platform's versatility and the array of analytical tools
                                        provide a comprehensive trading experience. The real-time
                                        market data ensures I never miss a beat. Kudos to the
                                        Algorooms team for a top-notch platform”
                                    </p>
                                    <h4>Yogita Sharma</h4>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className='col-md-7 ' style={{ background: 'radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)', borderRadius: '40% 0 0 40%', paddingLeft: '120px' }}>
                    <div className={`text-start ${Styles.TEST}`}>
                        <h6>TESTIMONIALS</h6>
                        <h2>What they say <br></br> about us?</h2>
                        <p className='pt-4'>Welcome to Algoroom's Testimonials! <br />
                            Dive into the stories of clients who've experienced success with
                            us. Real voices, real impact. See how Algorooms make your
                            trading easy and simple.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
