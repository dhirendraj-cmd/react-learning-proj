import React from 'react'
import '../App.css';

const Login = () => {


  return (
    <div className="form-box">
        <form>
            <div className='form-fields'>
                <input type='text' className='text-field' name="username" placeholder='Enter Username' />
                <input type='password' className='pwd-field' name="pwd" placeholder='Enter Password' />
                <button type='submit' className='btn-submit'>change Color</button>
            </div>
        </form>
        
    </div>
    
  )
}

export default Login