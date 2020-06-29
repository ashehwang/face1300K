import React from 'react';

class EditProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCoverPhoto = this.handleCoverPhoto.bind(this);
        this.handleProfilePicture = this.handleProfilePicture.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id);
    }

    update(field) {
        return e => this.setState({ [field] : e.currentTarget.value });
    }

    handleProfilePicture(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ profileFile: file, photoUrl: fileReader.result })
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleCoverPhoto(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ coverFile: file, photoUrl: fileReader.result })
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[bio]', this.state.bio);
        formData.append('user[current_city]', this.state.current_city);
        formData.append('user[home_town]', this.state.home_town);
        if (this.state.coverFile) {
            formData.append('user[cover_photo]', this.state.coverFile)
        }
        if (this.state.profileFile) {
            formData.append('user[profile_photo]', this.state.profileFile)
        }
        this.props.editUser(formData, this.state.id);
        this.props.closeModal();
    }

    render(){
        const { user } = this.props;
        if (!user) return null;
        return(
            <div className="edit-profile-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="edit-profile-header">
                        <h1>Edit Profile</h1>
                        <i className="far fa-times-circle" onMouseDown={this.props.closeModal}></i>
                    </div>
                    <div className="edit-profile-picture">
                        <div className="edit-2-profile-header">
                            <p>Profile Picture</p>
                            <input type="file" onChange={this.handleProfilePicture}/>
                            <i className="fas fa-camera-retro"></i>
                        </div>
                    </div>
                    <div className="edit-cover-photo">
                        <div className="edit-2-profile-header">
                            <p>Cover Photo</p>
                            <input type="file" onChange={this.handleCoverPhoto} />
                            <i className="fas fa-images"></i>
                        </div>

                    </div>
                    <div className="edit-bio">
                        <div className="edit-2-profile-header">
                            <p>Bio</p>
                            <i className="fas fa-pen-nib"></i>
                        </div>
                        <input type="text" value={this.state.bio ? this.state.bio: ""} onChange={this.update('bio')} />
                    </div>
                    <div className="edit-current-city">
                        <div className="edit-2-profile-header">
                            <p>Current City</p>
                            <i className="fas fa-city"></i>
                        </div>
                        <input type="text" value={this.state.current_city ? this.state.current_city : ""} onChange={this.update('current_city')} />
                    </div>
                    <div className="edit-home-town">
                        <div className="edit-2-profile-header">
                            <p>Home Town</p>
                            <i className="fas fa-home"></i>
                        </div>
                        <input type="text" value={this.state.home_town ? this.state.home_town : ""} onChange={this.update('home_town')} />
                    </div>
                    <input type="submit" value="Edit Your Info"/>
                </form>
            </div>
        );
    }
}

export default EditProfile;