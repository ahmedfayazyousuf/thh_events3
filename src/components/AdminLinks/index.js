import React from 'react';
import '../Z_stuff/All.css';
import thhlogo from '../Z_stuff/thhlogo.png'


const AdminLinks = () => { 

    return (
        <>
            <div className='main' style={{display:'flex', flexDirection: 'column', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width: '100px'}} src={thhlogo} alt="THHLogo"/>
            <h1 style={{color: 'white', fontSize: '40px' }}>Admin Links</h1>    

                <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://admin.microsoft.com/">
                        <div className="ButtonDiv2">
                            <p>MS Admin Portal</p>
                        </div>
                    </a> 
                       
                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://www.mysonicwall.com/muir/login">
                        <div className="ButtonDiv2">
                            <p>Sonic Wall </p>
                        </div>
                    </a>
                </div>

                <div className='holder' style={{display: 'flex', gap: '20px', padding: '20px'}}>

                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://books.zoho.com/">
                        <div className="ButtonDiv2">
                            <p>ZOHO</p>
                        </div>
                    </a>    

                    {/* eslint-disable-next-line */}
                    <a target="_blank" href="https://eservices.tax.gov.ae/en-us/login">
                        <div className="ButtonDiv2">
                            <p>Tax</p>
                        </div>
                    </a>
                </div>
                
                
            </div>
        </>
    )
}

export default AdminLinks