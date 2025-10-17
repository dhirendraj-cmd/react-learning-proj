import React from 'react'
import './Navbar.css'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="main-login-container">
      <div className="form-box">
          <form>
              <div className='form-fields'>
                  <input type='text' className='text-field' name="username" placeholder='Enter Username' />
                  <input type='password' className='pwd-field' name="pwd" placeholder='Enter Password' />
                  <button type='submit' className='btn-submit' onClick={handleSubmit}>Login</button>
              </div>
          </form>
          
      </div>
    </div>
    
  )
}

export default Login