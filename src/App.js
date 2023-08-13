import './App.css';
import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./common/preloader/Preloader";
import store from "./redux/reduxStore";

const HeaderContainer = lazy(() => import("./components/header/HeaderContainer"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const DialogsContainer = lazy(() => import("./components/dialogs/DialogsContainer"));
const UsersContainer = lazy(() => import("./components/users/UsersContainer"));
const ProfileContainer = lazy(() => import("./components/profile/ProfileContainer"));
const LoginPage = lazy(() => import("./components/login/Login"));


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
                <Suspense fallback={<Preloader />}>
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
                </Suspense>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer =  compose(
    connect(mapStateToProps, { initializeApp })
)(App);
const SocialApp = (props) => {
    return <Router>
        <Provider store={store}>
            <AppContainer/>
        </Provider>,
    </Router>
}
export default SocialApp;

