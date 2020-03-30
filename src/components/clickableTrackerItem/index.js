import React from 'react'

class ClickableTrackerItem extends React.Component {
    constructor(props) {
        super(props);

        var availability;
        if (props.itemAvailability) {
            availability = props.itemAvailability
        } else {
            availability = []
        }

        this.state = {            
            itemIcon: props.itemIcon,
            itemName: props.itemName,
            itemClickStates: props.itemClickStates,
            itemCurrentClickState: props.itemCurrentClickState, 
            itemAvailability: availability         
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let nextState = (this.state.itemCurrentClickState + 1) % this.state.itemClickStates.length
        this.setState({
            itemCurrentClickState: nextState
        })
    }

    render() {
        return (
            <div className="item" onClick={this.handleClick} >
                <img className={"item-image " + this.state.itemClickStates[this.state.itemCurrentClickState] + " " + this.state.itemAvailability.join(" ")} src={this.props.itemIcon} title={this.props.itemName} alt={this.props.itemName} />
            </div>
        )
    }
}

export default ClickableTrackerItem