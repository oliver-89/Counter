
import React from 'react';

//在你需要使用store中数据的组件中，引入react-redux提供的connect方法
import { connect } from 'react-redux';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            groupSize: 0
        }
    }

    //在被改造的组件内就可以通过this.props.属性名获取store中的数据
    render() {
        return (
            <div>
                <button onClick={this.crease}>+</button>
                <mark>{this.props.count}</mark>
                <button onClick={this.diminish}>-</button>
            </div>
        )
    }

    // 定义方法mapStateToProps，参数为state，并且返回一个对象，对象内定义需要获取的store内的数据，
    // 由于是使用的countReducer中的数据，所以需要使用state.countReducer.属性名 
    mapStateToProps(state) {
        return {
            count: state.countReducer.count
        }
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
                groupSize: props.groupSize
            }
        }
        return null;
    }



}

//在抛出的时候调用connect方法改造当前组件
//connect的第一个参数为数据，即mapStateToProps方法
//接着在第二个括号内传入当前需要被改造的组件  
export default connect(mapStateToProps)(Counter);