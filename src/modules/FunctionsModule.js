export default {
    createWhenClicked: function(state, cb) {
        return function(option) {
            cb([...state, option])
            console.log([...state, option])
        }
    },
    createWhenUnclicked: function(state, cb) {
        return function(option) {
            let arr = [...state];
            arr.splice(arr.indexOf(option), 1);
            cb([...arr]);
            console.log(arr);
        }
    }
}