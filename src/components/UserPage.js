import React from 'react';
import { useRecoilState } from 'recoil';
import { login } from '../stores/Login';
import './css/UserPage.css'
import { useNavigate } from "react-router-dom";


import { userData } from '../stores/UserData';

function UserPage() {

    const nav = useNavigate()

    const [loginState, setLoginState] = useRecoilState(login); // token lagras här. 

    const [userInfo, setUserInfo] = useRecoilState(userData); // inloggade användar datan lagras här. 




    function logOut() {
        setLoginState("")


        if (loginState == "") {
            nav("/login");
            alert("you logged out!")


        }


    }










    return (
        <div>
            <h1>welcome to your account page! :)</h1>
            <button type="submit" className="logOut" onClick={logOut}>LOG OUT</button>


            <div className="youInfo">
                <h4>Your Account Information</h4>
                <p>USERNAME: {userInfo.username}</p>
                <p>EMAIL: {userInfo.email}</p>
                <p>ROLE: {userInfo.role}</p>
                <p>CITY: sheesh</p>
                <p>STREET: 7835 new road</p>
                <p>ZIPCODE: 12926-3874</p>
                <p>PHONE: 1-570-236-7033</p>


            </div>

        </div>
    );

}


export default UserPage;