import { useEffect } from 'react'
import './Article.css'

const Todo = () => {
  useEffect(() => {
    document.title = 'Todo | zet4.net'
  }, [])

  return (
    <div>
      <h2 class="article_title">Todo</h2>
      <div class="article_content">
        <p>
          1. Resume link on About page.<br />
          2. Home page<br />
          3. Connect Todo page with a Database.<br />
          4. Learn about display: inline; and block;
        </p>
      </div>
    </div>
  )
}

export default Todo