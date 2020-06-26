import React from 'react';

class CreatePostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { body: "" , photoFile: null, photoUrl: null, reference_id: null };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id);
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPhotoPost(formData);
        this.setState({ body: "" });
        this.props.closeModal();
    }

    updateBody(e) {
        this.setState({ body: e.currentTarget.value });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {

        const preview = this.state.photoUrl ? <img className="pic-preview" src={this.state.photoUrl} /> : null;
        const { currentUser } = this.props;
        const prpUrl = currentUser.profilePhotoUrl ? currentUser.profilePhotoUrl : "https://i.ibb.co/wzjv56z/5cc28e190d41d2738de6.jpg";

        return(
            <div className="create-post-box">
                <div className="create-post-prop">
                    Create Post
                    <i className="fas fa-times-circle" onClick={this.props.closeModal}></i>
                </div>
                <div className="create-post-user">
                    <div className="create-post-user-picture">
                        <img src={prpUrl} />
                    </div>
                    <div className="create-post-user-detail">
                        <p>{currentUser.first_name} {currentUser.last_name}</p>
                        <div><i className="fas fa-globe-asia"></i>Public<i className="fas fa-sort-down"></i></div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} className="create-post-form-container">
                    <textarea placeholder={`What's on Your Mind, ${currentUser.first_name}?`} value={this.state.body} cols="50" rows="5" onChange={this.updateBody}/>
                    <div className="create-post-footer">
                        <div>
                            Add to Your Post
                        </div>
                        <div className="create-post-form-icons">
                            <i className="fas fa-video"></i>
                            <label htmlFor="file-upload" className="custom-file-upload"><i className="fas fa-images"></i>
                            </label>
                                <input type="file" onChange={this.handleFile} id="file-upload" className="hidden"/>
                            <i className="fas fa-user-tag"></i>
                            <i className="fas fa-map-marker-alt"></i>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="create-post-preview">
                        {preview}
                    </div>
                    <div className="create-post-form-submit">
                        <input type="submit" value="Create Post" />
                    </div>
                </form>
            </div>
        )
    }

}

export default CreatePostForm;