import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditForumForm(props) {
    const { forum } = props;

  function handleEditForumFormSubmission(event) {
    event.preventDefault();
    props.onEditForum({name: event.target.name.value, post: event.target.post.value, upVote:event.target.upVote.value,downVote: event.target.downVote.value, id: forum.id,timeOpen: forum.timeOpen, formattedWaitTime: forum.formattedWaitTime});
  }
  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler = {handleEditForumFormSubmission}
      buttonText = "update forum"/>
    </React.Fragment>
  );
}
EditForumForm.propTypes = {
    forum: PropTypes.object,
    onEditForum: PropTypes.func
  };
export default EditForumForm;
