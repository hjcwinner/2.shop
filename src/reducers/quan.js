let basicState = [
    { id : 0, name : '아디다스', quan : 2 },
    { id : 1, name : '나이키', quan : 1}
]

export default function(state = basicState, action) {
    if(action.type === 'plus'){
        let copy = [...state]
        copy[0].quan++
        return copy
    }
    else if(action.type === 'minus'){
        let copy = [...state]
        copy[0].quan--
        return copy
    }
    else {
        return state
    }
}