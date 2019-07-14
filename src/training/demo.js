import { createStore } from 'redux';
import {status, sort} from './actions/index';

var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1,
    }
};

var myReducer = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        return {...state, status: !state.status};
        // state.status = !state.status;
        // return state;
    }
    if(action.type === 'SORT') {
        let {by, value} = action.sort; // by = action.by
        let {status} = state; // status = state.status
        // state.sort = {
        //     by: action.sort.by,
        //     value: action.sort.value
        // }
        return {
            status: status,
            sort: {
                by: by,
                value: value
            }
        };
    }
    return state;
}

const store = createStore(myReducer);

console.log('Default: ' , store.getState());
// thực hiện công việc thay đổi status
// var action = { type: 'TOGGLE_STATUS' }
// store.dispatch(action);
store.dispatch(status());
console.log('TOGGLE STATUS: ' , store.getState());

// thực hiện công việc sắp xếp tên từ Z-A
// var sortAction = {
//     type: 'SORT',
//     sort: {
//         by: 'name',
//         value: -1
//     }
// }
// store.dispatch(sortAction);
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT: ' , store.getState());