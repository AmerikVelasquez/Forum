import React from 'react';
import NewForumForm from './NewForumForm';
import ForumList from './ForumList';
import ForumDetail from './ForumDetail';
import EditForumForm from './EditForumForm';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import Moment from 'moment';

class ForumControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedForum: null,
      editing: false
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateForumElapsedWaitTime(),
    60000
    );
  }
  componentDidUpdate() {
    console.log("component updated!");
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }


  updateForumElapsedWaitTime = () => {
    const { dispatch } = this.props;
  Object.values(this.props.mainForumList).forEach(forum => {
    const newFormattedWaitTime = forum.timeOpen.fromNow(true);
    const action = a.updateTime(forum.id, newFormattedWaitTime);
    dispatch(action);
  });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }
  handleClick = () => {
    if(this.state.selectedForum != null){
      this.setState({ 
        selectedForum :null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
  }
  }
  
  handleAddingNewForumToList = (newForum) => {
    const {dispatch}= this.props;
    const action = a.addForum(newForum);
    dispatch(action);
    const action2 =a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedForum = (id) => {
    const selectedForum = this.props.mainForumList[id];
    this.setState({selectedForum : selectedForum});
  }

  handleDeletingForum = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteForum(id);
    dispatch(action);
    this.setState({selectedForum: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleUpVote = (id) =>{
    const { dispatch } = this.props;
    const action = a.upVoteForm(id);
    dispatch(action);
  }
  handleDownVote = (id) =>{
    const { dispatch } = this.props;
    const action = a.downVoteForm(id);
    dispatch(action);
  }
  handleEditingForumInList = (forumToEdit) => {
    const {dispatch} =this.props;
    const action=a.addForum(forumToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedForum: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
        currentlyVisibleState = <EditForumForm forum = {this.state.selectedForum} onEditForum = {this.handleEditingForumInList}/>
        buttonText = "Return to Forum List";
    }else if(this.state.selectedForum != null){
      currentlyVisibleState = <ForumDetail forum = {this.state.selectedForum} 
                              onClickingDelete = {this.handleDeletingForum} 
                              onClickingEdit = {this.handleEditClick}
                              onClickUpVote = {this.handleUpVote}
                              onClickDownVote = {this.handleDownVote}/>
      buttonText = "Return to Forum";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewForumForm onNewForumCreation={this.handleAddingNewForumToList} />
      buttonText = "Return to Forum";
    } else {
      currentlyVisibleState = <ForumList forumList = {this.props.mainForumList} onForumSelection={this.handleChangingSelectedForum}/>
      buttonText = "add to Forum";
    }
    return (
      <React.Fragment>
          {currentlyVisibleState}
          <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

ForumControl.propTypes = {
  mainForumList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainForumList: state.mainForumList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;