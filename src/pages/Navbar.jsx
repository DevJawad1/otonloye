import React from 'react'
import logo from '../assets/kinglogo.jpg'

const Navbar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiar w-100 borderbottom border-black">
    <div class="container-fluid gap-5">
        <div className="d-flex" style={{alignItems:"center"}}>
        <a class="navbar-brand sm" href="#">
            <img src={logo} alt="" className='logo'/>
        </a>
        <a class="navbar-brand" href="#">
            Warri Progressive Society UK
        </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav gap-5">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#aboutUs">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">National</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Membership</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Event</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="ri-search-line"></i></a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar