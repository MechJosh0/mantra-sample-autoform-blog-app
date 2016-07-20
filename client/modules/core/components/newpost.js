import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';
import PostsSchema from '/lib/schema/posts';

const NewPost = ({create, errors}) => (
  <div>
    <h2>Add New Post</h2>
    <ReactAutoForm
      errors={errors}
      muiTheme={true}
      onSubmit={create}
      schema={PostsSchema}
      type="insert"
      useFields={['title', 'content']}
    />
  </div>
);

NewPost.propTypes = {
  errors: React.PropTypes.array,
  create: React.PropTypes.func.isRequired
};

export default NewPost;
