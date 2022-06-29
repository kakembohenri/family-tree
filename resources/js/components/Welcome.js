import React from 'react'
import PropTypes from 'prop-types'

const Welcome = props => {
  return (
    <div className='main-container'>
        <div className='welcome-container'>
        <div className="welcome-details">
            <h3>Welcome</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non sit veniam eveniet optio nobis hic in nam. Aperiam nam nihil maxime, atque beatae eum.</p>
        </div>
        <form className='login'>
            <h3>Login</h3>
            <div className="input-item">
                <label htmlFor="">Username</label>
                <input type="text" />
            </div>
            <div className="input-item">
                <label htmlFor="">
                    Password
                </label>
                <input type="text" />
            </div>
            <div className="form-actions">
                <input type="submit" value="Login" />
            </div>
        </form>
        </div>
    </div>
    
  )
}

Welcome.propTypes = {}

export default Welcome