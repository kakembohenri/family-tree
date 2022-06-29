import React from 'react'
import PropTypes from 'prop-types'
import '../css/popup.css'

const MemberDetails = ({ details: { name }, close }) => {

return (
    <>
    <div onClick={() => close()} className="backdrop"></div>
    <div className="popup">
    <div>
        <button onClick={() => close()} className="close">X</button>
    </div>
<div className="details-container">
    <div className="details-conatiner-header">
        <img src="images/new 2.jpg" alt="Lwegaba Abduhakim Sekaana" className="pic" />
        <span>
            <h3>{name}</h3>
        <p>Born.1994 -</p>
        <a href="#">View this tree</a>
        </span>
    </div>
        <ul className="options-container">
            <li className="option"><a href="#">Details</a></li>
            <li className="option"><a href="#">Contact</a></li>
            <li className="option"><a href="#">Extra</a></li>
            <li className="option"><a href="#">Photos</a></li>    
        </ul>
    <div className="details">
        <ul className="vitals-container">
            <li className="vital">
                <h6>Name</h6>
                <p>Lwegaba Abdulhakim Sekaana</p>
            </li>
            <li className="vital">
                <h6>Born</h6>
                <p>20th September 1994</p>
            </li>
            <li className="vital">
                <h6>Profession</h6>
                <p>Economist (B.development economics. MAK university)</p>
                <p>Bussinessman -car sales and motor vehicle workshop (Kimisha Enterprises)</p>
            </li>
            <li className="vital">
                <h6>Marital status</h6>
                <p>Single</p>
            </li>
        </ul>
    </div>
</div>
</div>
    </> 
  )

}


MemberDetails.propTypes = {}

export default MemberDetails