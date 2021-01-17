import React, { useState } from 'react'
import useGlobal from '../../store'


function ClickableTrackerItem(props) {

    const [stateIndex, setStateIndex] = useState(0);
    const [globalState, globalActions] = useGlobal();

    var itemAvailability = props.itemAvailability
    var isKey = false
    if(props.itemAvailability == null) {
        itemAvailability = []
    }


    var itemClass = "item"
    if (props.itemClickStates[0].includes("key")) {
        itemClass = "key"
    }

    return (
        <div className={itemClass} onClick={() => {
            setStateIndex(((stateIndex + 1) % props.itemClickStates.length))
            if (props.itemAvailability.indexOf("character") === -1) {
                return
            }
            if (stateIndex === 0) {
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