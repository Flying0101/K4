
import React, { useEffect } from 'react';
import { newUser } from '../stores/NewUser';
import axios from 'axios';
import { useRecoilState } from 'recoil';

import { login } from '../stores/Login';

 
function AllUsers() {

    const [theUser, setTheUser] = useRecoilState(newUser);

    const [loginState, setLoginState] = useRecoilState(login); // token..



    function userInfo() {

        axios.get(`https://k4backend.osuka.dev/users`)
            .then((response) => response.data)
            .then((res) => { setTheUser(res) })
    }



    useEffect(() => {
        userInfo();
    }, [])




    if (loginState) {
        return (
            <div>
                <h1>ALL USERS BELOW </h1>


                {theUser.map((information) => (
                    <div className="allUser">

                        <p>ID: {information.id}</p>
                        <p>username: {information.username}</p>
                        <p>password: {information.password}</p>
                        <p>email: {information.email}</p>

                    </div>))}

            </div>
        );


    }
    else {
        return <h1>|ERROR| To see this information you need to log in... |ERROR|</h1>
    }





}

export default AllUsers;