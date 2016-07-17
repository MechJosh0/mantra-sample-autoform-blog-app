/**
 * Created by josh.welham on 17/07/16.
 */

const schema = {
  postId: {
    type: String
  },
  author: {
    type: String
  },
  text: {
    type: String,
    materialForm: {
      hintText: 'Enter your comment here...'
    }
  },
  createdAt: {
    type: Date
  }
};

export default schema;
