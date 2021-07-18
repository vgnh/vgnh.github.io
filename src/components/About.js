import './Article.css'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    document.title = 'About | zet4.net'
  }, [])

  return (
    <article>
      <h2 class="article_title">About</h2>
      <div class="article_content">
        <p>
          Hi! I'm Vignesh. Welcome to my own little place on the internet!<br />
          I'm a developer who works with web technologies such as HTML/CSS/JavaScript, Node.js (Express) and React.<br />
          Other technologies I've worked with include Java, Kotlin, C#, and a bit of Python.<br />
          I enjoy working with open source software, learning new technologies and languages.<br />
          My current interests include Rust and WebAssembly.
          <br /><br />
          I'm fairly new to the web stack and I'm still learning the design principles.<br />
          While this may be the case, this is the stack I'm looking to becoming proficient at as of now.<br />
          I also love video games and retro console emulators.
          <br /><br />
          My other unrelated interests include learning 日本語.<br />
          I'm also a huge <a href="https://en.wikipedia.org/wiki/Gundam" target="_blank" rel="noreferrer">Gundam</a> fan and I'd even attribute it to laying the foundation for my interest in Computer Science back when I was a little kid.
          <br /><br />
          You can find me on <a href="https://github.com/vgnh" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://twitter.com/vigneshm_" target="_blank" rel="noreferrer">Twitter</a>.<br />
          Business enquiry? Send me an <a href="mailto:vigneshofficial03@gmail.com">Email</a>.<br />
          You can also download my <a href="#">Resume</a>.
        </p>
      </div>
    </article>
  )
}

export default About