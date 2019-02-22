export default function reducers(state = [], action) {
    switch (action.type) {
        
        case 'ADD_TASK':
            return  [ ...state, { task: action.task, }]
            
        default: return state;
    }
}
