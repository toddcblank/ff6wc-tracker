import React from 'react'

class ClickableTrackerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            itemIcon: props.itemIcon,
            itemName: props.itemName,
            itemClickStates: props.itemClickStates,
            itemCurrentClickState: props.itemCurrentClickState,          
        }

        this.toggledClass = "item-image " + this.state.itemClickStates[this.state.itemCurrentClickState]
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
            <div className="item" onClick={this.handleClick}>
                <img className={"item-image " + this.state.itemClickStates[this.state.itemCurrentClickState]} src={this.props.itemIcon} alt={this.props.itemName} />
            </div>
        )
    }
}

export default ClickableTrackerItem