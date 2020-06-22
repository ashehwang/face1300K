import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
})