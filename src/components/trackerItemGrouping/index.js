import React from 'react'
import ClickableTrackerItem from '../clickableTrackerItem'

class TrackerItemGrouping extends React.Component {

    constructor(props) {
        super(props);

       

        this.state = {
            groupIcon: props.groupIcon,
            groupedItems: props.groupedItems
        }
    }

    render() {
        return (
            <div className="tracker-group">
                
                <div className="group-item">
                    <div></div>
                    <ClickableTrackerItem
                        itemIcon={this.state.groupIcon.itemIcon}
                        itemName={this.state.groupIcon.itemName}
                        itemClickStates={this.state.groupIcon.itemClickStates}
                        itemCurrentClickState={0}
                        itemAvailability={this.state.groupIcon.itemAvailability}
                    />
                    <div></div>
                </div>
                <div className="tracker-group-items">
                        {this.state.groupedItems.map((item, i) =>
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
}

export default TrackerItemGrouping