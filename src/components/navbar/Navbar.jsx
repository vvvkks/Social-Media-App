import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
export const Navbar = () => {
	const activeLink = { isActive: true };
	return <nav className={s.nav}>
		<div>
			<NavLink to="/profile" className={activeLink.isActive ? `${s.item} ${s.active}` : s.item}>
				Profile
			</NavLink>
		</div>
		<div>
			<NavLink to="/dialogs" className={activeLink.isActive ? `${s.item} ${s.active}` : s.item}>
				Messages
			</NavLink>
		</div>
		<div >
			<NavLink to="/users" className={activeLink.isActive ? `${s.item} ${s.active}` : s.item}>
				Users
			</NavLink>
		</div>
		<div>
			<NavLink to="/news" className={activeLink.isActive ? `${s.item} ${s.active}` : s.item}>
				News
			</NavLink>
		</div>
		<div>
			<NavLink to="/music" className={activeLink.isActive ? `${s.item} ${s.active}` : s.item}>
				Music
			</NavLink>
		</div>
		<div >
			<NavLink to="/settings" className={activeLink.isActive ? `${s.item} ${s.active}` : s.item}>
				Settings
			</NavLink>
		</div>
	</nav>
}
export default Navbar;