import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png"
export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}
	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} alt={'Content'} className={s.mainPhoto}/>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
				<div>{profile.fullName}</div>
				<ProfileStatus status={status} updateStatus={updateStatus}/>
			</div>
		</div>
	)
}