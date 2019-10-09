export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        text
    }
}

export const removeTask = (index) => {
    return {
        type: 'REMOVE_TASK',
        payload: index
    }
}