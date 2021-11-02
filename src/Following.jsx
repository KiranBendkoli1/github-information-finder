import React, {useEffect, useState} from 'react'

const Following = (props) => {
    const [subData, setSubData] = useState([]);
    const getFInfo = async()=>{
        try{
            let res = await fetch(props.following.url);
            let data = await res.json();
            let {login,name, html_url,public_repos, followers, following} = data;
            
            setSubData({login,name, html_url,public_repos, followers, following});
        }catch(error){

        }
    }
    useEffect(() => {
       getFInfo();
    }, [])
    return (
        <>
            <div className="card shadow text-dark bg-light mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.following.avatar_url} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="list-group list-group-flush">
                            <h5 className="list-group-item">{props.following.login} &nbsp; {subData.name}</h5>
                            <li className="list-group-item">Followers : {subData.followers} &nbsp;&nbsp;&nbsp;  Following : {subData.following}</li>
                            <li className="list-group-item"></li>
                            <li className="list-group-item">Number of Repositories : {subData.public_repos}</li>
                            <div className="card-body"><a href={subData.html_url} target="_blank" rel="noopener noreferrer">Go To Profile of {subData.login} </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Following
