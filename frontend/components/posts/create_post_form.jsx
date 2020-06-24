import React from 'react';

class CreatePostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { body: "" , photoFile: null, photoUrl: null };
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
                </div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.body} cols="50" rows="5" onChange={this.updateBody}/>
                    <input type="file" onChange={this.handleFile}/>
                    <div className="create-post-form-tab">
                    <h3>Image Preview</h3>
                    {preview}
                    <input type="submit" value="Create Post" />
                    </div>
                </form>
            </div>
        )
    }

}

export default CreatePostForm;