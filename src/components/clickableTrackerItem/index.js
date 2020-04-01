import React, { useState } from 'react'
import {useCharacterCount} from '../../hooks/characterCountHook'
import useGlobal from '../../store'


function ClickableTrackerItem(props) {

    const [stateIndex, setStateIndex] = useState(0);
    const [globalState, globalActions] = useGlobal();

    var itemAvailability = props.itemAvailability
    if(props.itemAvailability == null) {
        itemAvailability = []
    }

    return (
        <div className="item" onClick={() => {
            setStateIndex(((stateIndex + 1) % props.itemClickStates.length))
            if (props.itemAvailability.indexOf("character") === -1) {
                return
            }
            if (stateIndex === 0) {
                // console.log("Count is " + count)
                globalActions.addToCounter(1)
            } else {
                globalActions.addToCounter(-1)
            }
            }} >
            <img className={"item-image " + props.itemClickStates[stateIndex] + " " + itemAvailability.join(" ")} src={props.itemIcon} title={props.itemName} alt={props.itemName} />
        </div>
    )
}

export default ClickableTrackerItem