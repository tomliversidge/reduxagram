function comments(state = [], action){
    switch (action.type){
        case "ADD_COMMENT":
            console.log("adding comment");
        case "REMOVE_COMMENT":
            console.log("removing comment");
        default:
            return state;
    }
}
export default comments;