import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        <Link to="/users/1"><li>Leanne Graham</li></Link>
        <Link to="/users/2"><li>Ervin Howell</li></Link>
        <Link to="/users/3"><li>Clementine Bauch</li></Link>
        <Link to="/users/4"><li>Patricia Lebsack</li></Link>
        <Link to="/users/5"><li>Chelsey Dietrich</li></Link>
        <Link to="/users/6"><li>Mrs. Dennis Schulist</li></Link>
        <Link to="/users/7"><li>Kurtis Weissnat</li></Link>
        <Link to="/users/8"><li>Nicholas Runolfsdottir V</li></Link>
        <Link to="/users/9"><li>Glenna Reichert</li></Link>
        <Link to="/users/10"><li>Clementina DuBuque</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
