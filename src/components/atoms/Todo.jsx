import { useState } from 'react'
import { TodoStyled } from '../style/Styled'

const Todo = ({ todoTitle, handleDeleteTodo, id }) => {
    const [crossed, setCrossed] = useState(false)

    function finished() {
        setCrossed(!crossed)
    }

    return (
        <TodoStyled>
            <p style={{ textDecoration: crossed ? 'line-through' : '' }}>
                {todoTitle}
            </p>
            <button
                style={{
                    margin: '0 10px',
                }}
                onClick={() => finished()}
            >
                👍
            </button>
            <button onClick={() => handleDeleteTodo(id)}>❌</button>
        </TodoStyled>
    )
}
export default Todo
