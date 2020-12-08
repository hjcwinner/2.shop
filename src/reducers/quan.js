let basicState = [
    { id : 0, name : '아디다스', quan : 2 },
    { id : 1, name : '나이키', quan : 1}
]

export default function(state = basicState, action) {
    if(action.type === 'productAdd'){
        let found = state.findIndex((a)=> { return a.id === action.payload.id})
        console.log(found)
        if( found >= 0 ){
            let copy = [...state]
            copy[found].quan++
            return copy
        }
        else{
            let copy = [...state]
            copy.push(action.payload)
            return copy
        }  
    }
    else if(action.type === 'plus'){
        let copy = [...state]
        copy[action.payload].quan++
        return copy
    }
    else if(action.type === 'minus'){
        let copy = [...state]
        copy[action.payload].quan--
        let passcopy = copy[action.payload].quan
        if(passcopy >= 0)
            return copy
        else
        {
            copy[action.payload].quan++
            return copy
        } 
    }
    else {
        return state
    }
}