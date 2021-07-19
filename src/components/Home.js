import './Home.css'

const Home = () => {
  const meow = new Audio("./sounds/meow.mp3")
  const playMeow = () => meow.play()
  return (
    <div class="home">
      <div class="home_container">
        <div class="portrait_container">
          <img onClick={playMeow} class="portrait" src="https://avatars.githubusercontent.com/u/22466712?v=4" alt="GitHub avatar" title="You might know me by this avatar on GitHub." />
        </div>
        <h2 class="header_name">Vignesh Mani</h2>
        <p class="para_about">
          Hi there! I'm Vignesh.
          <br /><br />
          I'm a developer who currently works with web technologies such as HTML/CSS/JavaScript, Node.js (Express) and React.
          Other technologies I've worked with in the past include Java, Kotlin, C#, and a bit of Python.
          I enjoy working with open source software, learning new technologies and languages.
          <br /><br />
          I'm fairly new to the web stack and I'm still learning the design principles.<br />
          While this may be the case, this is the stack I've chosen to become proficient at as of now.<br />
          I have varied interests when it comes to software, and in my free time you can often find me reading/learning about things
          such as retro game programming books, IoT, retro console emulators, etc. My current interests include learning and becoming proficient at a
          systems programming language such as Rust and learning about WebAssembly.
          <br /><br />
          My other unrelated interests include learning to read and speak 日本語, which I must say is currently on pause.<br />
          I'm also a huge <a href="https://en.wikipedia.org/wiki/Gundam" target="_blank" rel="noreferrer">Gundam</a> fan and I'd even attribute it to laying the foundation for my interest in Computer Science back when I was a little kid.
          <br /><br />
          You can find me on <a href="https://github.com/vgnh" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://twitter.com/vigneshm_" target="_blank" rel="noreferrer">Twitter</a>.<br />
          Business enquiry? Send me an <a href="mailto:vigneshofficial03@gmail.com">Email</a>.<br />
          You can also download my <a href="https://github.com/vgnh/vgnh.github.io/releases/download/0.1.0/Vignesh-Mani-Resume.pdf">Resume</a>.
        </p>
      </div>
    </div>
  )
}

export default Home