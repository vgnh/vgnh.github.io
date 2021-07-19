import './Error.css'
import { Link } from 'react-router-dom'

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
          Click here to go back <Link to="/">Home</Link>.
        </h2>
      </div>
    </div>
  )
}

export default Error