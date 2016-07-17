/**
 * Created by josh.welham on 17/07/16.
 */

const schema = {
  title: {
    type: String,
    materialForm: {
      floatingLabelText: 'Title',
      hintText: 'Enter your post title...'
    }
  },
  content: {
    type: String,
    materialForm: {
      hintText: 'Enter your posts content...'
    }
  },
  createdAt: {
    type: Date
  }
};

export default schema;
