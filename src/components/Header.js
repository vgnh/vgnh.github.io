import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header class="header">
      <div class="header_div1">
        <div class="header_div2">
          <span class="header_title">zet4.net</span>
        </div>
        <nav class="navbar">
          <ul>
            <li>
              Home
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              Projects
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header