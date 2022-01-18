import React from 'react'

import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='content'>
                <h2>Join Our Difi Community</h2>
                <form action="">
                    <div className='form-container display-col'>
                        <input type="email" name="email" placeholder='Enter your email'/>
                        <button className='btn' > Sign Up</button>


                    </div>

                    <div className='form-container'>
                         <input type="checkbox"/> <p>Yes, I agree to receive email notification</p>
                    </div>

                </form>

            </div>

            
        </div>
    )
}

export default Subscribe

