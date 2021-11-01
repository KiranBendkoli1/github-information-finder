import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";



const Home = () => {
    const [mydata, setMyData] = useState("");
    const [userName, setUserName] = useState("")

    const getUserInfo = async () => {
        try {

            let url = `https://api.github.com/users/${userName}`;
            console.log(url)
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);

            let { avatar_url, html_url, followers, following, name, public_repos } = data;
            
            setMyData({ avatar_url, html_url, followers, following, name, public_repos })

        } catch (error) {

        }
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                    <div className="input-group my-5">
                    <input type="text" className="form-control" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <button className="btn btn-outline-secondary" type="button" onClick={() => getUserInfo()} id="button-addon2">Search</button>
                </div>
                <UserCard mydata={mydata} userName={userName} />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home
