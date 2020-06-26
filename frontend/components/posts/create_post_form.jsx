import React from 'react';

class CreatePostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { body: "" , photoFile: null, photoUrl: null, reference_id: null };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
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

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        return(
            <div className="create-post-box">
                <div className="create-post-prop">
                    Create Post
                    <i className="fas fa-times-circle"></i>
                </div>
                <div className="create-post-user">
                    <div className="create-post-user-picture">
                        <img src="" alt="pic"/>
                    </div>
                    <div className="create-post-user-detail">
                        <p>Current User's Full Name</p>
                        <div><i className="fas fa-globe-asia"></i>Public<i className="fas fa-sort-down"></i></div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} className="create-post-form-container">
                    <textarea value={this.state.body} cols="50" rows="5" onChange={this.updateBody}/>
                    <div>
                        <div>
                            Add to Your Post
                        </div>
                        <div className="create-post-form-icons">
                            <i className="fas fa-video"></i>
                            <label htmlFor="file-upload" class="custom-file-upload"><i className="fas fa-images"></i>
                            </label>
                                <input type="file" onChange={this.handleFile} id="file-upload" className="hidden"/>
                            <i className="fas fa-user-tag"></i>
                            <i className="fas fa-map-marker-alt"></i>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="create-post-form-tab">
                        <h3>Image Preview</h3>
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