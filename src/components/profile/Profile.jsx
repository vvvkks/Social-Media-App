import {ProfileInfo} from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

export const Profile = (props) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPostsContainer />
		</div>
	)
}
export default Profile;