import { useState } from 'react'

export function useHandleElm() {
    const [inputValue, setInputValue] = useState('')
    const [elms, setElms] = useState([])

    const handleClick = () => {
        setElms((prevState) => [
            ...prevState,
            { id: Math.floor(Math.random() * 1000), title: inputValue },
        ])
        setInputValue('')
    }

    function blockLoading(e) {
        e.preventDefault()
    }

    return {
        inputValue,
        setInputValue,
        elms,
        setElms,
        handleClick,
        blockLoading,
    }
}
