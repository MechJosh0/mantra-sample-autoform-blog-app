import {CommentsSchema} from '/lib/collections/comments';
import {validateOnly, invalidKeys, forumFieldsExist} from './../../../lib/validate_schema';

export default {
  create({Meteor, LocalState}, forumFields, data) {
    const id = Meteor.uuid();
    const context = validateOnly(CommentsSchema, forumFields, ['text']);

    if(forumFieldsExist(forumFields) && context.isValid())
    {
      Meteor.call('posts.createComment', id, data.postId, forumFields, (err) =>
      {
        if(err)
        {
          return LocalState.set('CREATE_COMMENT_ERROR', err.message);
        }
      });

      return LocalState.set('CREATE_COMMENT_SUBMITTED', true);
    }

    return LocalState.set('CREATE_COMMENT_ERROR', invalidKeys(context));
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  }
};
