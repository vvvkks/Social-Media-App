import s from "./DialogItem.module.css"
import {NavLink, useLocation} from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	const location = useLocation();
	const isActive = location.pathname === path;
	const dialogClasses = isActive ? `${s.dialog} ${s.active}` : s.dialog;
	return (
		<div className={dialogClasses}>
			<NavLink to={path}>
				{props.name}
			</NavLink>
		</div>
	)
}
export default DialogItem;