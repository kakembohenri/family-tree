import PropTypes from 'prop-types'
import { useState } from 'react'
import Results from './Results'

const Header = ({ toggle }) => {
  const [search, setSearch] = useState('')
    
  const onChange = e => setSearch(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Search', search)
    setSearch('')
  }
  
  return (
    <div className='header'>
        <ul className='header-list'>
            <li className='family-name'>Family name</li>
            <li className='search'>
              <form onSubmit={e => onSubmit(e)}>
              <input type="text" name="search" id="" value={search}
            onChange={(e) => onChange(e)}
            placeholder='Search...'/>
              </form>
              
            {/* <Results search={search} /> */}
            </li>         
            <li>
                <button onClick={() => toggle()} type="button" className='add-member'>Add Member</button>

                <button id="logout">Logout</button>
            </li>
            
        </ul>
    </div>
  )
}

Header.propTypes = {
    toggle: PropTypes.func.isRequired
}


export default Header