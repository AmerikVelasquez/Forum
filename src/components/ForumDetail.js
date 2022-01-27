import React from 'react';
import PropTypes from 'prop-types';

function ForumDetail(props) {
  const {forum, onClickingDelete, onClickUpVote, onClickDownVote } = props;
  return (
  <React.Fragment>
    <h1>Forum Detail </h1>
    <p>{forum.name} - {forum.post}</p>
    <p>{forum.upVote}- {forum.downVote}</p>
    <button onClick = {()=> onClickingDelete(forum.id)}>Close Forum</button>
    <button onClick = {() => onClickUpVote(forum.id)}>up Vote</button>
    <button onClick = {() => onClickDownVote(forum.id)}>Down Vote</button>
    <button onClick={ props.onClickingEdit }>Update Forum</button>
    <hr />
  </React.Fragment>
  );
}

ForumDetail.propTypes = {
  forum: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickDownVote: PropTypes.func,
  onClickUpVote: PropTypes.func
}

export default ForumDetail;
