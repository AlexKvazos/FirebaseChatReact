import React from 'react';

class Welcome extends React.Component {

	onImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => this.props.onUserChange('image', reader.result);
		reader.readAsDataURL(file);
	}

	showFilePrompt() {
		this.fileInput.click();
	}

  render() {
  	const { props } = this;

    return (
      <div className="welcome">
				<h1>Welcome</h1>
				<p>Please create your profile</p>

				<form onSubmit={ e => props.onReady(e) }>

						{ props.user.image
							? <img
									onClick={ () => this.showFilePrompt() }
									src={ props.user.image }
									alt="Profile" />
							: <label
									htmlFor="image"
									className="profile-image">
								 	Choose Photo
								</label> }

							<input
								placeholder="Your name..."
								type="text"
								onChange={ e => props.onUserChange('name', e.target.value) }
								maxLength={ 18 }/>

					<input
						id="image"
						type="file"
						ref={ n => this.fileInput = n }
						onChange={ e => this.onImageChange(e) } />

				</form>

      </div>
    );
  }
}

export default Welcome;
