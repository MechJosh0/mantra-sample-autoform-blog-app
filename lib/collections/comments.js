/**
 * Created by josh.welham on 17/07/16.
 */

import {Mongo} from 'meteor/mongo';
import Schema from './../schema/comments';

const Comments = new Mongo.Collection('comments');

SimpleSchema.extendOptions({
  materialForm: Match.Optional(Object)
});

const CommentsSchema = new SimpleSchema(Schema);

Comments.attachSchema(CommentsSchema);

export {Comments, CommentsSchema};
