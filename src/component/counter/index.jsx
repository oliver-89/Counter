
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            groupSize: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.crease}>+</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.diminish}>-</button>
            </div>
        )
    }
    crease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
        this.props.onInCrease();

    }

    diminish = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }))
        this.props.onDiminish();
    }
    static getDerivedStateFromProps(props, state) {

        if (props.groupSize !== state.groupSize) {
            return {
                value: 0,
                groupSize:props.groupSize
            }
        }
        return null;
    }

}
export default Counter;