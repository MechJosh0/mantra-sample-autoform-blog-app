/**
 * Created by josh.welham on 17/07/16.
 */

import {Mongo} from 'meteor/mongo';

const Comments = new Mongo.Collection('comments');

export default Comments;
