import * as c from './../actions/ActionTypes';

  export const deleteForum = id => ({
    type: c.DELETE_FORUM,
    id
  });
  export const toggleForm = () => ({
    type: c.TOGGLE_FORM
  });
  export const addForum = (forum) => {
    const { name, post, upVote,downVote, formattedWaitTime,timeOpen, id } = forum;
    return {
      type: c.ADD_FORUM,
      name: name,
      post: post,
      upVote: upVote,
      downVote: downVote,
      id: id,
      formattedWaitTime,
      timeOpen: timeOpen
    }
  }
  export const upVoteForm = (id) => ({
    type: c.UP_VOTE,
    id
  });
  export const downVoteForm = (id) => ({
    type: c.DOWN_VOTE,
    id
  });
  export const updateTime = (id, formattedWaitTime) => ({
    type: c.UPDATE_TIME,
    id: id,
    formattedWaitTime: formattedWaitTime
  });
  