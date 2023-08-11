import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
export const ProfileInfo = ({profile, status, updateStatus}) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large} alt={'Content'}/>
				<div>{profile.fullName}</div>
				<ProfileStatus status={status} updateStatus={updateStatus}/>
			</div>
		</div>
	)
}