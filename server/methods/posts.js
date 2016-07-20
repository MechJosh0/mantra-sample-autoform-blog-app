import {Posts, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'posts.create'(_id, forumFields) {
      check(_id, String);
      check(forumFields, Object);

      // Demo the latency compensations (Delete this in production)
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      forumFields.createdAt = new Date();

      Posts.insert({_id, ...forumFields});
    }
  });

  Meteor.methods({
    'posts.createComment'(_id, postId, forumFields) {
      check(_id, String);
      check(postId, String);
      check(forumFields, Object);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      forumFields.postId = postId;
      forumFields.createdAt = new Date();
      forumFields.author = 'The User';

      Comments.insert({_id, ...forumFields});
    }
  });
}
