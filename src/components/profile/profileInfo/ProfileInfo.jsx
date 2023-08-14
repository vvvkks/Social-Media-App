import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";

const Contact = ({ contactTitle, contactValue }) => {
	return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>;
};

export const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />;
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} alt={'Content'} className={s.mainPhoto} />
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				<div>
					<div>
						<b>Full name</b>: {profile.fullName}
					</div>
					<div>
						<b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
					</div>
					{profile.lookingForAJob && (
						<div>
							<b>My skills</b>: {profile.lookingForAJobDescription}
						</div>
					)}
					<div>
						<b>About me</b>: {profile.aboutMe}
					</div>
					<div>
						<b>Contacts</b>: {Object.keys(profile.contacts).map(key => (
						<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
					))}
					</div>
				</div>
				<ProfileStatus status={status} updateStatus={updateStatus} />
			</div>
		</div>
	);
};
