import {ProfileInfo} from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {saveProfile, updateProfileInfo} from "../../redux/profileReducer";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile}
						 status={props.status}
						 updateStatus={props.updateStatus}
						 isOwner={props.isOwner}
						 savePhoto={props.savePhoto}
						 saveProfile={props.saveProfile}
			/>
			<MyPostsContainer />
		</div>
	)
}
export default Profile;