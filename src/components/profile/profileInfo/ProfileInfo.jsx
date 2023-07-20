import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/preloader/Preloader";
export const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div>
				<img src="https://wallpaperaccess.com/full/707529.jpg" className={s.profileBackground} alt="Content" />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt={'Content'}/>
				<div>{props.profile.fullName}</div>
				<div>{props.profile.aboutMe}</div>
			</div>
		</div>
	)
}