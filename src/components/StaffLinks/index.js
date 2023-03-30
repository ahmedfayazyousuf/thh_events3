import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'


const Home = () => { 


    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>

            <img style={{width: '100px', marginTop: '80px'}} src={thhlogo} alt="THHLogo"/>
            <h1 style={{color: 'white', fontSize: '40px' }}>STAFF LINKS</h1>    

                <div className='green' style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                    <div className='holder' style={{display: 'flex', gap: '20px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://thehanginghouse.webhr.co/hr/home">
                            <div className="ButtonDiv2">
                                <p>WebHR</p>
                            </div>
                        </a> 
                        
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://app.clickup.com/">
                            <div className="ButtonDiv2">
                                <p>ClickUp</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://app.hubspot.com/login/">
                            <div className="ButtonDiv2">
                                <p>Hubspot</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://thh-internal.web.app/">
                            <div className="ButtonDiv2">
                                <p>THH Internal</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://thehanginghouse.com/">
                            <div className="ButtonDiv2">
                                <p>THH Website</p>
                            </div>
                        </a>
                    </div>

                    <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://www.qlink.to/thehanginghouse">
                            <div className="ButtonDiv2">
                                <p>Online Drive</p>
                                <p style={{marginTop: '-15px'}}>(qlink)</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://app.apollo.io/#/cockpit">
                            <div className="ButtonDiv2">
                                <p>Apollo</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */} 
                        <a target="_blank" href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a138673239w199446139p193870326">
                            <div className="ButtonDiv2">
                                <p>Google Analytics</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://my.bluehost.com/web-hosting/cplogin">
                            <div className="ButtonDiv2">
                                <p>Bluehost</p>
                            </div>
                        </a>    

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://login.microsoftonline.com/">
                            <div className="ButtonDiv2">
                                <p>Microsoft</p>
                            </div>
                        </a>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default Home