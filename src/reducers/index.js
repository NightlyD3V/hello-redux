export default (state, action) => {
    console.log(action);
    switch (action.type) {
        case "":
        //do something
        break;
    default: 
        return state;
    }
}