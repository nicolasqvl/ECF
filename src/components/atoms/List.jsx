import Todo from './Todo'
import { useHandleElm } from '../hooks/UseHandleElm'
import { ListStyled } from '../style/Styled'

const List = ({ listTitle, id, handleDeleteList }) => {
    const {
        inputValue,
        setInputValue,
        elms,
        setElms,
        handleClick,
        blockLoading,
    } = useHandleElm()

    function handleDeleteTodo(itemId) {
        setElms(elms.filter((del) => del.id !== itemId))
    }

    return (
        <ListStyled>
            <p>{listTitle}</p>
            <form onSubmit={blockLoading}>
                <input
                    placeholder="Todo title ..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button onClick={() => handleClick()}>Add Todo</button>
            </form>
            {elms.map((elm) => (
                <Todo
                    key={elm.id}
                    todoTitle={elm.title}
                    handleDeleteTodo={handleDeleteTodo}
                    id={elm.id}
                />
            ))}
            <button onClick={() => handleDeleteList(id)}>Delete list</button>
        </ListStyled>
    )
}

export default List
