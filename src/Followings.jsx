import React, {useState, useEffect} from 'react'
import Following from './Following';

const Followings = (props) => {
    const [followingData, setFollowingData] = useState([]);
    

    
    const getFollowingInfo = async()=>{
        try{
            let url = `https://api.github.com/users/${props.userName}/following`;
            let res = await fetch(url);
            let data= await res.json();
            console.log(data)
            setFollowingData(data);
        }catch(error){

        }
    }
    useEffect(() => {
        getFollowingInfo();
    }, [getFollowingInfo])
    return (
        <>
            <div className="overflow-auto">
                <center><h2 className="my-5">Followings of {props.userName}</h2></center>
                <div className="mx-auto">
                    {
                        followingData.map((following)=>{
                            return <Following following={following} key={following.id}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Followings
