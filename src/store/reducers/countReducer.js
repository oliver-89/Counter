 // 定义初始化的数据
 const initializeState = {
    count: 0
}
      
// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state  
// 并且抛出这个countReducer
export default function countReducer(state = initializeState,action) {
    return state;
}