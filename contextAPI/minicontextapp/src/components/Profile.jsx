import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";


function Profile() {
    // data receiving
    const {user} = useContext(UserContext);

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile