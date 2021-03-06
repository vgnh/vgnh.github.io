import './Error.css'

const Error = () => {
  return (
    <div class="error">
      <div class="error_container">
        <h1 class="error_message">
          404<br />
          Oops! Page not found.<br />
          This might not be the page you are looking for.
        </h1>
        <h2 class="error_helper_message">
          Click here to go back <a href="/">Home</a>.
        </h2>
      </div>
    </div>
  )
}

export default Error