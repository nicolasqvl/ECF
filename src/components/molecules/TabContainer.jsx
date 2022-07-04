import Tab from '../atoms/Tab'
import { useHandleElm } from '../hooks/UseHandleElm'
import { TabContainerStyled, TabFormStyled } from '../style/Styled'

const TabContainer = () => {
    const {
        inputValue,
        setInputValue,
        elms,
        setElms,
        handleClick,
        blockLoading,
    } = useHandleElm()

    function handleDeleteTab(itemId) {
        setElms(elms.filter((del) => del.id !== itemId))
    }

    return (
        <div>
            <TabFormStyled>
                <form onSubmit={blockLoading}>
                    <input
                        placeholder="Tab title ..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    ></input>
                    <button onClick={() => handleClick()}>Add Tab</button>
                </form>
            </TabFormStyled>

            <TabContainerStyled>
                {elms.map((elm) => (
                    <Tab
                        key={elm.id}
                        tabTitle={elm.title}
                        id={elm.id}
                        handleDeleteTab={handleDeleteTab}
                    />
                ))}
            </TabContainerStyled>
        </div>
    )
}

export default TabContainer
