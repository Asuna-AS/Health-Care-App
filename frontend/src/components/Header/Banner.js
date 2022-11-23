import React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';
import Particle from '../Particle';
const Banner = () => {
    const history = useHistory();

    return (
        <section className= "max-w-screen-xl py-4 mx-auto px-6">
            <Particle/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-20">
                    <Fade left>
                        <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">

                            <div className="flex flex-col space-y-2">
                                {/* <img className="w-24" src="../../../assets/banner/medal.png" alt="banner" /> */}
                                <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed"><span className="text-5xl">Helping you live longer, healthier, and better.</span></h1>
                                <p className="text-black text-light text-xl"></p>
                            </div>
            
                            {/* button  */}
                            <div className="flex flex-row space-x-2">
                                <Button className="btn-primary bg-blue-500 py-3 px-4 poppins w-48 mt-6 hover:bg-red-500" text="Checkup" onClick={() => history.push('/checkup')} />
                                <Button className="btn-primary bg-blue-500 py-3 px-4 poppins w-48 mt-6 hover:bg-red-500 shadow-lg" text="Contact us" onClick={() => history.push('/contact')} />
                            </div>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className="order-1 lg:order-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/4773/4773193.png" alt="banner" />
                        </div>
                    </Fade>
                </div>
            
        </section>
    )
}

export default Banner
