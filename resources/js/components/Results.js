import React from 'react'
import PropTypes from 'prop-types'

const Results = ({ search }) => {
  return (
    <div className='results-container'>
        <div className='results-item'>
          {/* <div>
        <img src="" alt="pic" />
        </div> */}
        <span>{search}</span>
        </div>
            
    </div>
  )
}

Results.propTypes = {}

export default Results