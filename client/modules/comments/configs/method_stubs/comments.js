export default function ({Collections, Meteor}) {
  Meteor.methods({
    'posts.createComment'(_id, postId, forumFields) {
      check(_id, String);
      check(postId, String);
      check(forumFields, Object);

      forumFields.postId = postId;
      forumFields.createdAt = new Date();
      forumFields.saving = true;
      forumFields.author = 'Me';

      Collections.Comments.insert({_id, ...forumFields});
    }
  });
}
