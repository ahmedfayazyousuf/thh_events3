import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'

const Activation = () => { 
    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>

            <img style={{width: '100px', marginTop: '80px'}} src={thhlogo} alt="THHLogo"/>
            
            {/* <div style = {{display: 'flex', width: '100%', height: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}> */}
                <h1 style={{color: 'white', fontSize: '20px' }}>WEB APPS - ACTIVATIONS</h1>    
            {/* </div> */}

                <div className='green' style={{display: 'flex', gap: '20px', padding: '20px', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='holder' style={{display: 'flex', gap: '20px'}}>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://uploadimage.vercel.app/">
                            <div className="ButtonDiv2">
                                <p>Image Upload</p>
                            </div>
                        </a>
                        
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://nissanandinfinititrivia.vercel.app/">
                            <div className="ButtonDiv2">
                                <p>Nissan Trivia</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://f1game.vercel.app/">
                            <div className="ButtonDiv2">
                                <p>F1 Trivia</p>
                            </div>
                        </a>

                        
                    </div>

                    <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://thh-internal.web.app/">
                            <div className="ButtonDiv2">
                                <p>Puzzle Game</p>
                            </div>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://cwnvirtualescaperoom.azurewebsites.net/">
                            <div className="ButtonDiv2">
                                <p>Escape Room</p>
                            </div>
                        </a>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Activation