const tasklistReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
          return state.concat([action.text])
        case 'REMOVE_TASK':
          return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
        ]
        default:
          return state
    }
}
export default tasklistReducer;