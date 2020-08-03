
import { ADD_COUNT } from '../actionTypes';
 
 // 定义初始化的数据
 const initializeState = {
    count: 0
}
      
// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state  
// 并且抛出这个countReducer


//引入ADD_COUNT常量，并使用switch语句，或者if语句对action.type进行判断
export default function countReducer(state = initializeState,action) {
    switch (action.type) {
        case ADD_COUNT:
            return { count: state.count + 1 };
        default:
            return state;
    }

}