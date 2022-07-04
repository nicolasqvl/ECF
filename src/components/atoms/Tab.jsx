import List from '../atoms/List'
import { useHandleElm } from '../hooks/UseHandleElm'
import { TabStyled } from '../style/Styled'

const Tab = ({ tabTitle, id, handleDeleteTab }) => {
    const {
        inputValue,
        setInputValue,
        elms,
        setElms,
        handleClick,
        blockLoading,
    } = useHandleElm()

    function handleDeleteList(itemId) {
        setElms(elms.filter((del) => del.id !== itemId))
    }

    return (
        <TabStyled>
            <p>{tabTitle}</p>
            <form onSubmit={blockLoading}>
                <input
                    placeholder="List title ..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button onClick={() => handleClick()}>Add List</button>
            </form>

            {elms.map((elm) => (
                <List
                    key={elm.id}
                    listTitle={elm.title}
                    id={elm.id}
                    handleDeleteList={handleDeleteList}
                />
            ))}

            <button onClick={() => handleDeleteTab(id)}>Delete tab</button>
        </TabStyled>
    )
}

export default Tab
