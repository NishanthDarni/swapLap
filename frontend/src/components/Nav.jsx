import React from 'react'
import {Link} from 'react-router-dom'
import '../css/link.css'
import '../css/nav.css'
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
function Nav()
{   document.body.style.backgroundColor="aliceblue"
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand forFontStyle" href="#">OLX</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link forFontStyle" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <Link to='/sell' className="nav-link">SELL</Link>
              </li> 
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn bg-dark btn-search" type="submit"><SearchIcon/></button>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item nav-item-margin">
                <Link to="/login" className='link forFontStyle'>LOGIN</Link>
              </li>
              <li className="nav-item nav-item-margin">
                <Link to="/signUp" className='link forFontStyle'>SIGN UP</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;