import React from 'react'
import './About.css'
import {SiHiveBlockchain, SiStrapi,SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc'
import AboutCard from './AboutCard';
const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <h2 > A Growing Protocol Ecosystem</h2>
                <p>The term decentralized finance, or DeFi for short, describes a financial system that operates without the need for traditional, centralized intermediaries. We’re used to everything going through a bank and other financial institutions like a global exchange, but DeFi creates a system that can function on its own.</p>
                <div className='card-container'>
                    <div className='card'>
                        <AboutCard icon={<SiHiveBlockchain className='icon'/>} heading='Realiable, Tamper-proof network' text="Decentralized finance is quickly rising as a more secure, more transparent, and more efficient alternative to traditional financial services."/>
                    </div>
                    <div className='card'>
                        <AboutCard icon={<SiStrapi className='icon'/>} heading='Seemless connection to any API' text="Decentralized finance is quickly rising as a more secure, more transparent, and more efficient alternative to traditional financial services."/>
                    </div>
                    <div className='card'>
                        <AboutCard icon={<SiFsecure className='icon'/>} heading='Realiable, Tamper-proof network' text="Decentralized finance is quickly rising as a more secure, more transparent, and more efficient alternative to traditional financial services."/>
                    </div>
                    <div className='card'>
                        <AboutCard icon={<VscServerProcess className='icon'/>} heading='Secure off-chain computation' text="Decentralized finance is quickly rising as a more secure, more transparent, and more efficient alternative to traditional financial services."/>
                    </div>

                </div>
                <a href='/' className='btn' > Use Defi</a>


            </div>
            
        </div>
    )
}

export default About
