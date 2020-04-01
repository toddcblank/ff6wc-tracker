import {useState, useEffect } from 'react'

function useCharacterCount() {
    const [count, setCharacterCount] = useState(0);
    useEffect(
        () => {            
            console.log(count)
        },
        [count]
    )
    return [count, setCharacterCount]
}

export {useCharacterCount}