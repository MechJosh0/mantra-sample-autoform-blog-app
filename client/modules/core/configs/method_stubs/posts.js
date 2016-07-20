import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'posts.create'(_id, forumFields) {
      check(_id, String);
      check(forumFields, Object);

      forumFields.createdAt = new Date();

      Collections.Posts.insert({_id, ...forumFields});
    }
  });
}
