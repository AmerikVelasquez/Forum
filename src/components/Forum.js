import React from 'react';
import PropTypes from 'prop-types';

function Forum(props) {
  return (
  <React.Fragment>
    <div onClick = {() => props.whenForumClicked(props.id)}>
    <h3>{props.name} - {props.post}</h3>
    <p>{props.upVote} -{props.downVote}</p>
    <p><em>{props.formattedWaitTime}</em></p>
    </div>
  </React.Fragment>
  
  );
}

Forum.propTypes = {
  name: PropTypes.string,
  post: PropTypes.string, 
  id: PropTypes.string, 
  upVote: PropTypes.number,
  downVote: PropTypes.number,
  whenForumClicked: PropTypes.func ,
  formattedWaitTime: PropTypes.string
}

export default Forum;
