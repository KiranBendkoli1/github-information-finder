import React, { useEffect, useState } from "react";
import { FaUsers, FaGithubAlt } from "react-icons/fa"
import Followers from "./Followers"
import Followings from "./Followings";
import Repositories from "./Repositories"

const Home = () => {
    const [mydata, setMyData] = useState("");
    const [userName, setUserName] = useState("")
    const [page, setPage] = useState("")

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

    const currentPage =(page)=>{
        switch(page) {
            case "Followers":
                return  <Followers userName={userName}/>
            case "Followings" :
                return <Followings userName={userName}/>
            case "Repos" :
                return  <Repositories userName={userName}/>
            default:
              // code block
          }
    }

    const {
        avatar_url, html_url, followers, following, name, public_repos
    } = mydata;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto overflow-hidden">
                        <div className="input-group my-5">
                            <input type="text" className="form-control" placeholder="Enter Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <button className="btn btn-outline-secondary" type="button" onClick={() => getUserInfo()} id="button-addon2">Search</button>
                        </div>
                        <div >
                            {(avatar_url) ?
                                <div className="card mycard shadow usercard text-dark bg-light mb-3"  >
                                    <img src={avatar_url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {name}</h5>
                                        <p className="card-title"><strong>Username: {userName}</strong></p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><a className="mylink" onClick={() => setPage("Followers")} ><FaUsers size="1.3rem" /> &nbsp; Followers : {followers} </a></li>
                                        <li className="list-group-item"><a className="mylink" onClick={() => setPage("Followings")} ><FaUsers size="1.3rem" /> &nbsp;  Followings: {following}</a></li>
                                        <li className="list-group-item"><a className="mylink" onClick={() => setPage("Repos")}><FaGithubAlt size="1.3rem" /> &nbsp;  Repositories : {public_repos}</a></li>
                                    </ul>
                                    <div className="card-body">
                                        <a href={html_url} className="card-link" target="_blank" rel="noopener noreferrer">Go To Profile</a>
                                        <br />
                                    </div>

                                </div>
                                : "User Not Found"
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto ">
                        <div className="overflow-auto">
                            {
                            currentPage(page)
                            }
                        </div>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home
