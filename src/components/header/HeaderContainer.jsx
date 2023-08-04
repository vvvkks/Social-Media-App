import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {toggleIsFetching} from "../../redux/usersReducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps)(HeaderContainer);