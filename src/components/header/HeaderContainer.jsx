import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {toggleIsFetching} from "../../redux/usersReducer";
import {getAuthMe, usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.toggleIsFetching(false);
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);