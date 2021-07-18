import React from 'react'
import Utils from './Utils'
import "./Footer.css"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer_div1">
        <span class="footer_text">
          &copy; {Utils.currentYear} <a href="/">zet4</a> | Built using <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
        </span>
      </div >
    </footer >
  )
}

export default Footer