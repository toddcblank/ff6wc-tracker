import React from 'react'
import useGlobal from '../../store'

function CharacterCount(props) {

    const [globalState] = useGlobal(0);

    return (
        <div className="item incrementing tracker-group">
            <div className="incrementor">
                <div  ></div>
                <div  className="character-count" >{globalState.counter}</div>
                <div  ></div>
            </div>
        </div>
    )
}

export default CharacterCount