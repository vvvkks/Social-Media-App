import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {toggleIsFetching} from "../../redux/usersReducer";
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            headers: {
                'API-KEY': 'c6a5ffb7-c324-47ae-b6ad-eba042f9a8a8'
            }, withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toggleIsFetching(false);
                    let {id, login, email} = response.data.data;
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

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching}) (HeaderContainer);