import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';
import CommentsSchema from '/lib/schema/comments';

const CreateComment = ({create, errors, postId, submitted}) => (
  <div>
    <h2>Add New Post</h2>
    <ReactAutoForm
      buttonLabel="Add Comment"
      buttonProps={{disabled: true}}
      errors={errors}
      muiTheme={true}
      onSubmit={create}
      onSubmitExtra={{postId}}
      schema={CommentsSchema}
      type="insert"
      useFields={['text']}
    />
  </div>
);

CreateComment.propTypes = {
  errors: React.PropTypes.array,
  create: React.PropTypes.func.isRequired,
  postId: React.PropTypes.string.isRequired,
  submitted: React.PropTypes.bool
};

export default CreateComment;
