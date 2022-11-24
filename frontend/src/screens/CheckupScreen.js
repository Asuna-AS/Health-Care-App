import React from 'react';
import Bounce from 'react-reveal/Bounce';
import ContactForm from '../components/Contact/ContactForm';
import A from "../Heartcheckup.png"
import B from "../diabetes.png"
import C from "../braintumor.png"
import D from "../multiplediseases.png"
import sick from "../sick.png"
const CheckupScreen = () => {
    return (
        <section className="max-w-screen-xl py-36 mx-auto px-6  overflow-y-hidden">
            {/* heading  */}
                <div className="flex flex-col items-center space-x-2 pb-4">
                <Bounce left><h1 className="text-gray-700 poppins text-3xl">Check {" "} <span className="text-blue-500 font-semibold select-none">Up</span></h1>
                    <div className="bg-blue-500 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div></Bounce>
                    <div className='flex flex-row gap-20 justify-center'>
            <Bounce left>
                    <div className='poppins text-2xl pt-14 content-center'><h1 className='pb-10 pl-28'>Unwell?</h1><img className='w-3/5 h-3/5' src={sick}></img></div>
            </Bounce>
                        <div>
                            <Bounce right>
                            <div className='flex flex-row gap-3 w-4/5 justify-center'>
                                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white hover:shadow- duration-300'><a href='https://b3f7-117-219-22-193.in.ngrok.io'><span className='gg'><img className="" height={250} width={250} src={A}></img></span>Heart Diseases</a></div>
                                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300'><a href="https://priya272-diabetes-web-app-app-tr2j0t.streamlit.app/"><span className='gg'><img className="" height={250} width={250} src={B}></img></span>Diabetes</a></div>
                            </div>
                            <div className='flex flex-row gap-3 w-4/5 justify-center'>
                                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300'><a href="https://1c8c-117-219-22-193.in.ngrok.io/"><span className='gg'><img className="" height={250} width={250} src={C}></img></span>Brain Tumor</a></div>
                                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300'><span className='gg'><img className="" height={250} width={250} src={D}></img></span>Multiple Diseases</div>
                            </div>
                            </Bounce>
                        </div>
                    </div>
                </div>
            
            {/* form  */}
            {/* <ContactForm /> */}
        </section>
    )
}

export default CheckupScreen