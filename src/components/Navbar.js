import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        <li><Link to="/user/1">Amit</Link></li>
        <li><Link to="/user/2">Vijay</Link></li>
        <li><Link to="/user/3">Vishal</Link></li>
        <li><Link to="/user/4">Vivek</Link></li>
        <li><Link to="/user/5">Vishwa</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
