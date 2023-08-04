import {sendMessageCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (body) => {
			dispatch(sendMessageCreator(body));
		}
	}
}
export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps))
(Dialogs)