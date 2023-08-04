import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import React from "react";
import LoginPage from "./components/login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./common/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route exact path='/dialogs' element={<DialogsContainer />} />
                        <Route exact path='/profile/:userId?' element={<ProfileContainer />} />
                        <Route exact path='/users' element={<UsersContainer />} />
                        <Route exact path='/login' element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    connect(mapStateToProps, { initializeApp })
)(App);

