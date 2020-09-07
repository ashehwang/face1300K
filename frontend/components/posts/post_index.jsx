import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const { posts, deletePost, openModal, currentUser, users, createComment, likePost, unlikePost, comments } = this.props;
        const prpUrl = currentUser.profilePhotoUrl ? currentUser.profilePhotoUrl : "https://i.ibb.co/wzjv56z/5cc28e190d41d2738de6.jpg";

        if(!users) {
            return null;
        }

        if(!posts) {
            return null;
        }

        return(
            <div className="newsfeed-container">
                <div className="post-index-box">
                    <div className="trigger-create-post-box" onClick={() => openModal('createpost', currentUser.id)} >
                        <div className="trigger-top">
                            <img src={prpUrl} className="post-thumb"/>
                            <input type="text" placeholder={`What's on your mind, ${currentUser.first_name}?`}/>
                        </div>
                        <ul className="trigger-bottom">
                            <li><i className="fas fa-video"></i>Live Video</li>
                            <li><i className="fas fa-photo-video"></i>Photo/Video</li>
                            <li><i className="fas fa-laugh-wink"></i>Feeling/Activity</li>
                        </ul>
                    </div>
                        {posts.reverse().map(post => <PostIndexItem author={users[post.user_id]} currentUser={currentUser} createComment={createComment} key={post.id} post={post} comment_ids={post.comment_ids} deletePost={deletePost} openModal={openModal} likePost={likePost} unlikePost={unlikePost} comments={comments}/>)}
                </div>
            </div>
        )
    }
}

export default PostIndex;