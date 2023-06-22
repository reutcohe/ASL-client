import React from 'react'
import { Link } from 'react-router-dom'

export default function ClientNav() {
  return (
    <header className='container-fluid client-header bg-light shadow'>
    <div className="container ">
      <div className="row align-items-center">
        <div className="logo col-auto">
          <h2><Link to="/">We foods</Link></h2>
        </div>
        <nav className='d-flex col justify-content-between align-items-center'>
        
          <ul className='nav'>
            <li>
              <Link to="/test/upload">upload test</Link>
            </li>
            {/* <li>
              <Link to="/test/ownHook">hook 1</Link>
            </li>
            <li>
              <Link to="/test/lazy1">lazy 1</Link>
            </li>
            <li>
              <Link to="/test/lazyApi">lazy api</Link>
            </li> */}
          </ul> 
         
        </nav>
      </div>
    </div>
  </header>
  )
}
