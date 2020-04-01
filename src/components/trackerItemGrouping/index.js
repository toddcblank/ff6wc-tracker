import React from 'react'
import ClickableTrackerItem from '../clickableTrackerItem'
import {useCharacterCount} from '../../hooks/characterCountHook'

function TrackerItemGrouping(props) {

    const characterCount = useCharacterCount();

        return (
            <div className="tracker-group">
                
                <div className="group-item">
                    <div></div>
                    <ClickableTrackerItem
                        itemIcon={props.groupIcon.itemIcon}
                        itemName={props.groupIcon.itemName}
                        itemClickStates={props.groupIcon.itemClickStates}
                        itemCurrentClickState={0}
                        itemAvailability={props.groupIcon.itemAvailability}
                    />
                    <div></div>
                </div>
                <div className="tracker-group-items">
                        {props.groupedItems.map((item, i) =>
                            <ClickableTrackerItem
                                key={i}
                                itemIcon={item.itemIcon}
                                itemName={item.itemName}
                                itemClickStates={item.itemClickStates}
                                itemCurrentClickState={0}
                                itemAvailability={item.itemAvailability}
                            />
                        )}
                </div>
            </div>
        )
}

export default TrackerItemGrouping