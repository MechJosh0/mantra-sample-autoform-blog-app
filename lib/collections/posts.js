/**
 * Created by josh.welham on 17/07/16.
 */

import {Mongo} from 'meteor/mongo';

const Posts = new Mongo.Collection('posts');

export default Posts;
