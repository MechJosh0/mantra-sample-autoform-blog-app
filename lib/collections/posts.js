/**
 * Created by josh.welham on 17/07/16.
 */

import {Mongo} from 'meteor/mongo';
import Schema from './../schema/posts';

const Posts = new Mongo.Collection('posts');

SimpleSchema.extendOptions({
  materialForm: Match.Optional(Object)
});

const PostsSchema = new SimpleSchema(Schema);

Posts.attachSchema(PostsSchema);

export {Posts, PostsSchema};
