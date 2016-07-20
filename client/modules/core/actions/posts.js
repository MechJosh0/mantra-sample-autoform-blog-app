import {PostsSchema} from '/lib/collections/posts';
import {validateOnly, invalidKeys, forumFieldsExist} from './../../../lib/validate_schema';

export default {
  create({Meteor, LocalState, FlowRouter}, forumFields) {
    const _id = Meteor.uuid();
    const context = validateOnly(PostsSchema, forumFields, ['title', 'content']);

    LocalState.set('SAVING_ERROR', null);

    if(forumFieldsExist(forumFields) && context.isValid())
    {
      // There is a method stub for this in the config/method_stubs
      // That's how we are doing latency compensation
      Meteor.call('posts.create', _id, forumFields, (err) =>
      {
        if(err)
        {
          return LocalState.set('SAVING_ERROR', err.message);
        }
      });

      FlowRouter.go(`/post/${_id}`);

      return;
    }

    return LocalState.set('SAVING_ERROR', invalidKeys(context));
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
