import { ADD_COUNT , REDUCE_COUNT} from '../actionTypes';


//修改数据首先需要定义一个dispatch，在redux中，修改数据必须通过dispatch提交一个action来进行

//在countAction.js中定义addCount方法，并return一个对象，对象上有一个type属性，这个属性对应的是一个常量字符串，


export function addCount() {
    return {
        type: ADD_COUNT
    }
}

export function reduceCount() {
    return {
        type: REDUCE_COUNT
    }
}