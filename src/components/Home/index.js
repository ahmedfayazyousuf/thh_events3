import thhlogo from '../Z_stuff/thhlogo.png'
import React from 'react';
import '../Z_stuff/All.css'
import adminicon from '../Z_stuff/adminicon.png'
import stafficon from '../Z_stuff/stafficon.png'
import demoicon from '../Z_stuff/demoicon.png'
import { useNavigate } from 'react-router-dom';


const Home = () => { 

    const navigate = useNavigate();


    function admin() {
        navigate('/adminlinks');
    }

    function staff() {
        navigate('/stafflinks');
    }

    function demo() {
        navigate('/demolinks');
    }
    return (
        <>
            <div style={{display:'flex', flexDirection: 'column', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: '120px'}} src={thhlogo} alt="THHLogo"/>
                <h1 style={{color: 'white', fontSize: '60px', marginBottom: '-20px'}}>IMPORTANT LINKS</h1>
                <h1 style={{color: '#00f526'}}>Welcome. Find the links to the frequently used websites.</h1> 

                <div style={{display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px'}}>
                    <div className="ButtonDiv" onClick={admin}>
                        <img id='head' style={{width: '50px', paddingTop: '20px'}} src={adminicon} alt="AdminIcon"/>
                        <p>ADMIN LINKS</p>
                    </div>

                    <div className="ButtonDiv" onClick={staff}>  
                        <img id='head' style={{width: '50px', paddingTop: '20px'}} src={stafficon} alt="AdminIcon"/>
                        <p>STAFF LINKS</p>
                    </div>

                    <div className="ButtonDiv" onClick={demo}>
                        <img id='head' style={{width: '50px', paddingTop: '20px'}} src={demoicon} alt="AdminIcon"/>
                        <p>DEMO LINKS</p>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default Home