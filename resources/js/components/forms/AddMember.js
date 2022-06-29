import {useState} from 'react'
import PropTypes from 'prop-types'

const AddMember = ({ toggle }) => {
    const [option, setOption] = useState(false)
    
    const personal = () => {
        setOption(false)
    }

    const others = () => {
        setOption(true)
    }
  return (
    <>
    <div onClick={() => toggle()} className="backdrop"></div>
    <div className={!option ? 'add-form_container' : 'others-form'}>
        <button onClick={() => toggle()} className='close'>X</button>
        <div className="options-toggle">
            <button onClick={() => personal()} className="btn-option">Personal</button>
            <button onClick={() => others()} className="btn-option">Other details</button>
            <span className={!option ? 'border-slide' : 'border-slide_right'}></span>
        </div>
        <div className="forms">
            {!option ? (
                 <form className='form form-personal'>
                 <div className="input-item input-names">
                     <div className="item-name">
                     <label htmlFor="first_name">First name</label>
                     <input type="text" name="first_name"/>
                     
                     </div>
                     <div className="item-name">
                     <label htmlFor="first_name">Last name</label>
                     <input type="text" name="last_name"  />
                     
                     </div>
                     <div className="item-name">
                     <label htmlFor="">Other name</label>
                     <input type="text" name="other_names" />
                     </div>
                     
                 </div>
                 <div className="input-item">
                     <label htmlFor="">Gender</label>
                     <select name="gender" id="">
                         <option>*Select gender</option> 
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                     </select>
                 </div>
                 <div className="input-item">
                     <label htmlFor="">Parent</label>
                     <input type="text" name="parent" />
                 </div>
                 <div className="input-item">
                     <label htmlFor="">Date of Birth</label>
                     <input type="date" value="born" />
                     <div className="life-status">
                     Is this person dead?<input type="checkbox" name="" id="" />
                     </div>
                 
                         <label htmlFor="">Date of Death</label>
                     <input type="date" value="died" />
                     
                     <div className="life-status">
                         <label htmlFor="">
                         Does this person have a partner?
                         </label>
                         <input type="checkbox" name="" id="" />
                     </div>
                     
                    
                     <div className="input-item">
                     <label htmlFor="">Partner's name</label>
                         <input type="text" />
                         
                     </div>
                 </div>
                 <div className="input-item">
                     <label htmlFor="">Set profile photo</label>
                     <input type="file" name="" id="" />
                 </div>
                 <div className="form-actions">
                     <input type="reset" value="Clear" />
                     <input type="submit" value="Submit" />
                 </div>
                 
             </form>
            ) : (
                <form action="" className="form form-contact">
                <div className="input-item">
                    <label htmlFor="">Phone number</label>
                    <input type="text"  />
                </div>
                <div className="input-item">
                    <label htmlFor="">Website</label>
                    <input type="text" value="website" />
                </div>
                <div className="input-item">
                    <label htmlFor="">Email</label>
                    <input type="text" value="email" />
                </div>
                <div className="input-item">
                    <label htmlFor="">Profession</label>
                    <input type="text" value="Profession" />
                </div>
                <div className="form-actions">
                    <input type="reset" value="Clear" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            )
            }

        </div>
    </div>
    </> 
  )
}

AddMember.propTypes = {}

export default AddMember