import React from 'react'
import Bounce from 'react-reveal/Bounce';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import A1 from "../award-1.jpg"
import A2 from "../award-2.jpeg"
import A3 from "../award-3.jpg"
import A4 from "../award-4.jpg"
import StarIcon from "../StarIcon.png"
import WorkIcon from "../WorkIcon.png"
import SchoolIcon from "../SchoolIcon.png"

const HistoryScreen = () => {
    return (
                <main>
                    <section className="flex flex-col gap-10 max-w-screen-xl py-36 mx-auto px-6 overflow-y-hidden bg-white">
                        {/* heading  */}
                        <Bounce left>
                            <div className="flex flex-col items-center space-x-2 pb-4">
                            <h1 className="text-gray-700 poppins text-3xl">Our {" "} <span className="text-blue-500 font-semibold select-none">Hospitals</span></h1>
                                <div className="bg-blue-500 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                            </div>
                            <div className="flex flex-col min-w-full rounded-lg overflow-hidden shadow-green-500/50 md:shadow-xl md:shadow-green-500">
                                <VerticalTimeline lineColor='#1d28e3'>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                    
                                        contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 0%, rgba(29,40,227,1) 100%)', color: '#FFFFFF' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #1d28e3' }}
                                        iconStyle={{ background: '#1d28e3', color: '#FFFFFF' }}
                                    >
                                        <h3 className="vertical-timeline-element-title"><b>Tender Palm Hospital</b></h3>
                                        <p>Address: Amar Shaheed Path, Sector 7, Gomti Nagar, Lucknow, Uttar Pradesh 226001</p>
                                        <p>Areas served: Lucknow</p>
                                        <p>Hours: Open 24 hours</p>
                                        <p>Phone: 0522 350 0111</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                    
                                        contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 0%, rgba(29,40,227,1) 100%)', color: '#FFFFFF' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #1d28e3' }}
                                        iconStyle={{ background: '#1d28e3', color: '#FFFFFF' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">PANACEA HOSPITAL</h3>
                                        <p>Address: 4C, 1076, GomtiNagar, Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>
                                        <p>Areas served: Lucknow</p>
                                        <p>Hours: Open 24 hours</p>
                                        <p>Phone: 099190 83111</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                    
                                        contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 0%, rgba(29,40,227,1) 100%)', color: '#FFFFFF' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #1d28e3' }}
                                        iconStyle={{ background: '#1d28e3', color: '#FFFFFF' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">Galaxy Hospital & IVF Centre</h3>
                                        <p>Address: Sultanpur Rd, Arjunganj, Ahmamau, Uttar Pradesh 226002</p>
                                        <p>Areas served: Lucknow</p>
                                        <p>Hours: Open 24 hours</p>
                                        <p>Phone: 086046 35851</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                    
                                        contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 0%, rgba(29,40,227,1) 100%)', color: '#FFFFFF' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #1d28e3' }}
                                        iconStyle={{ background: '#1d28e3', color: '#FFFFFF' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">MEDIHEALTH MULTISPECIALITY HOSPITAL</h3>
                                        <p>Address: Padma Tower, Lallan Singh Nagar, Arjunganj, Lucknow, Uttar Pradesh 226002</p>
                                        <p>Areas served: Lucknow</p>
                                        <p>Hours: Open 24 hours</p>
                                        <p>Phone: 076518 32332</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                    
                                        contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 0%, rgba(29,40,227,1) 100%)', color: '#FFFFFF' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #1d28e3' }}
                                        iconStyle={{ background: '#1d28e3', color: '#FFFFFF' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">Health link hospital</h3>
                                        <p>Address: Amar Shaheed path kanpur, road, Lucknow, Uttar Pradesh 226002</p>
                                        <p>Areas served: Ahmamau</p>
                                        <p>Hours: Open 24 hours</p>
                                        <p>Phone: 091511 22204</p>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </div>
                        </Bounce>
                    </section>
                    </main>
    )
}

export default HistoryScreen