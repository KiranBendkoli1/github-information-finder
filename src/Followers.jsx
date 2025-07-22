import React, { useState, useEffect } from 'react'
import Follower from './Follower';
const Followers = (props) => {
    const [followersData, setFollowersData] = useState([]);

    
    const getFolloweInfo = async()=>{
        try{
            let url = `https://api.github.com/users/${props.userName}/followers`;
            let res = await fetch(url);
            let data= await res.json();
            console.log(data)
            setFollowersData(data);
        }catch(error){

        }
    }
    useEffect(() => {
        getFolloweInfo();
    }, [getFolloweInfo])
    return (
        <>
            <div className="container">
                <center><h2 className="my-5">Followers of {props.userName}</h2></center>
                <div className=" mx-auto">
                    {
                        followersData.map((follower)=>{
                            return <Follower follower={follower} key={follower.id}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Followers
