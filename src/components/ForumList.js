import React from 'react';
import Forum from './Forum';
import PropTypes from "prop-types";

function ForumList(props) {
  return(
    <React.Fragment>
    {Object.values(props.forumList).map((forum)=> 
      <Forum name = {forum.name}
      whenForumClicked = { props.onForumSelection }
      post = {forum.post}
      upVote = {forum.upVote}
      downVote = {forum.downVote}
      formattedWaitTime={forum.formattedWaitTime}
      id = {forum.id}
      key = {forum.id} />
    )} 
    </React.Fragment> 
  );
}
ForumList.propTypes ={
   forumList: PropTypes.object,
   onForumSelection: PropTypes.func
};
export default ForumList;
