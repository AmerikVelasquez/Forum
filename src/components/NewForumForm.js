import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from 'moment';

function NewForumForm(props){
  function handleNewForumFormSubmission(event){
    event.preventDefault();
    props.onNewForumCreation({name: event.target.name.value, post: event.target.post.value, upVote:parseInt(event.target.upVote.value), downVote:parseInt( event.target.downVote.value), id: v4(),timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)});
  }
  return (
    
      <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewForumFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
    
  );
}
NewForumForm.propTypes = {
    onNewForumCreation: PropTypes.func
};
export default NewForumForm;