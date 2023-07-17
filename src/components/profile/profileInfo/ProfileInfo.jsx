import s from "./ProfileInfo.module.css"
export const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://wallpaperaccess.com/full/707529.jpg" className={s.profileBackground} alt="Content" />
			</div>
			<div className={s.descriptionBlock}>
				ava+disc
			</div>
		</div>
	)
}