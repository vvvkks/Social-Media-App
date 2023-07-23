import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import React from "react";
import LoginPage from "./components/login/Login";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route exact path='/dialogs' element={<DialogsContainer/>}/>
                    <Route exact path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route exact path='/users' element={<UsersContainer/>}/>
                    <Route exact path='/login' element={<LoginPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
