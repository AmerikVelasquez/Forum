import * as c from './../actions/ActionTypes';

export default (state ={}, action) => {
  const{ name, post, upVote, downVote, id, formattedWaitTime, timeOpen} = action;
  switch(action.type){
    case c.ADD_FORUM:
      return Object.assign({}, state, {
        [id]: {
          name: name, 
          post: post,
          upVote: upVote,
          downVote: downVote,
          id: id,
          timeOpen: timeOpen,
          formattedWaitTime: formattedWaitTime
        }
      });
    case c.DELETE_FORUM:
      const newState = { ...state};
      delete newState[id];
      return newState;
    case c.UP_VOTE:  
    const newState1 = { ...state}
    
    Object.values(newState1).map(v => {
      console.log(v.upVote)
       return(v.upVote ++)});
    return newState1;    
    case c.DOWN_VOTE:  
    const newState2 = { ...state}
   
    Object.values(newState2).map(d => {
      console.log(d.downVote)
      return( d.downVote ++)});
    return newState2;    
    
    case c.UPDATE_TIME:
      const newForum = Object.assign({}, state[id], {formattedWaitTime});
      const updatedState = Object.assign({}, state, {
        [id]: newForum
      });
      return updatedState;
      default:
        return state;
  }
 
};
