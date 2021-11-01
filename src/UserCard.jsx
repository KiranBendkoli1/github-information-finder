import React from 'react'
import { FaUsers, FaGithubAlt } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
const UserCard = ({ mydata, userName }) => {
    const {
        avatar_url, html_url, followers, following, name, public_repos
    } = mydata;
    return (
        <>
            {(avatar_url)?
                <div className="card mycard usercard"  >
                    <img src={avatar_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-title"><strong>Username: {userName}</strong></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><FaUsers size="1.3rem" /> &nbsp; Followers : {followers} </li>
                        <li className="list-group-item"><FaUsers size="1.3rem" /> &nbsp;  Followings: {following}</li>
                        <li className="list-group-item"><FaGithubAlt size="1.3rem" /> &nbsp;  Repositories : {public_repos}</li>
                    </ul>
                    <div className="card-body">
                        <a href={html_url} className="card-link" target="_blank" ml-2 rel="noopener noreferrer">Go To Profile</a>
                        <br />
                        <NavLink exact to={`Repos/${userName}`} >Go To Repositories</NavLink>
                    </div>
                    
                </div>
                :"User Not Found"
            }
        </>
    )
}

export default UserCard
