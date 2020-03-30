import React from 'react'

class CountingTrackerItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {            
            itemIcon: props.itemIcon,
            itemName: props.itemName,
            maxCount: 27,
            currentCount: 0      
        }

        this.handleClickInc = this.handleClickInc.bind(this);
        this.handleClickDec = this.handleClickDec.bind(this);

    }

    handleClickInc() {
        
        this.setState({
            currentCount: (this.state.currentCount + 1)% (this.state.maxCount+1)
        })
    }

    handleClickDec() {
        if (this.state.currentCount > 0) {
            this.setState({
                currentCount: ((this.state.currentCount - 1) % this.state.maxCount)
            })
        }
    }

    render() {


        return (
            <div className="item incrementing tracker-group">
                <div className="incrementor">
                    <div  onClick={this.handleClickDec}>-</div>
                    <div  className="magicite" >{this.state.currentCount}</div>
                    <div  onClick={this.handleClickInc}>+</div>
                </div>
            </div>
        )
    }
}

export default CountingTrackerItem