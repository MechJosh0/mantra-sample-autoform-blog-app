import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';
import PostsSchema from '/lib/schema/posts';

const NewPost = () => (
  <div>
    <h2>Add New Post</h2>
    <ReactAutoForm
      muiTheme={true}
      onSubmit={this.props.create}
      schema={PostsSchema}
      type="insert"
      useFields={['title', 'content']}
    />
  </div>
);

export default NewPost;
