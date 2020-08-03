import React from 'react'
import Counter from '../counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalValue: 0
        };
    }
    render() {
        const initArray = [...Array(this.state.size).keys()];

        return <div>
            <label>size<input onBlur={this.handleReSize} defaultValue={0} /> </label>
            <label>totalNumber:{this.state.totalValue}</label>
            {
                initArray.map(key => <Counter onInCrease={this.handleCreaseTotalVaulue} onDiminish={this.handleDiminishTotalVaulue} key={key} />)
            }
        </div>

    }
    handleReSize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        });
    }

    handleCreaseTotalVaulue = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue + 1
        }))
    }
    handleDiminishTotalVaulue = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue - 1
        }))
    }

}

export default CounterGroup;