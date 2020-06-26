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
        this.props.fetchUser(this.props.match.params.userId);
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
    }

    render(){
        const { user } = this.props;
        if (!user) return null;
        return(
            <div className="edit-profile-container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Profile</h1>
                    <i className="far fa-times-circle"></i>
                    <div className="edit-profile-picture">
                        <div className="profile-header">
                            <p>Profile Picture</p>
                            <input type="file" onChange={this.handleProfilePicture}/>
                            <a href="#">Edit</a>
                        </div>
                    </div>
                    <div className="edit-cover-photo">
                        <div className="profile-header">
                            <p>Cover Photo</p>
                            <input type="file" onChange={this.handleCoverPhoto} />
                            <a href="#">Edit</a>
                        </div>

                    </div>
                    <div className="edit-bio">
                        <div className="profile-header">
                            <p>Bio</p>
                            <a href="#">Edit</a>
                        </div>
                        <input type="text" value={this.state.bio ? this.state.bio: ""} onChange={this.update('bio')} />
                    </div>
                    <div className="edit-current-city">
                        <div className="profile-header">
                            <p>Current City</p>
                            <a href="#">Edit</a>
                        </div>
                        <input type="text" value={this.state.current_city ? this.state.current_city : ""} onChange={this.update('current_city')} />
                    </div>
                    <div className="edit-home-town">
                        <div className="profile-header">
                            <p>Home Town</p>
                            <a href="#">Edit</a>
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