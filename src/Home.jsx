import React, { useEffect, useState } from "react";
import { FaUsers, FaGithubAlt } from "react-icons/fa";
import Followers from "./Followers";
import Followings from "./Followings";
import Repositories from "./Repositories";

const Home = () => {
  const [mydata, setMyData] = useState("");
  const [userName, setUserName] = useState("");
  const [page, setPage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  const getUserInfo = async () => {
    try {
      let url = `https://api.github.com/users/${userName}`;
      console.log(url);
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);

      let { avatar_url, html_url, followers, following, name, public_repos } =
        data;

      setMyData({
        avatar_url,
        html_url,
        followers,
        following,
        name,
        public_repos,
      });
    } catch (error) {}
  };

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      const ismobile = window.innerWidth <1200;
      if( ismobile !== isMobile) setIsMobile(ismobile);
    })
  },[isMobile]);
  const currentPage = (page) => {
    switch (page) {
      case "Followers":
        return <Followers userName={userName} />;
      case "Followings":
        return <Followings userName={userName} />;
      case "Repos":
        return <Repositories userName={userName} />;
      default:
      // code block
    }
  };

  const { avatar_url, html_url, followers, following, name, public_repos } =
    mydata;
  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "#100d13 ", minHeight: "100vh" }}
      >
        <div className="row mt-2">
          <div className={`${isMobile ? "col-6  mt-5":" col-6 fixed-top mt-5"}`}>
          
            <div className="input-group my-5">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  background: "",
                  color: "white",
                  borderStyle: "none",
                  outlineStyle: "none",
                  justifySelf: "center",
                  marginTop: "1.5rem",
                  backgroundColor: "#100d13",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px #4154ee",
                }}
              />
              <button
                className="acc-btn"
                type="button"
                onClick={() => getUserInfo()}
              >
                <a className="acc-link">Search</a>
              </button>
            </div>
            <div>
              {avatar_url ? (
                <div className="card mycard usercard text-light  mb-3" style={{background:"#100d13"}}>
                  <img src={avatar_url} className="card-img-top" alt="..." />
                  <div className="card-body" >
                    <h5 className="card-title" >Name: {name}</h5>
                    <p className="card-title">
                      <strong>Username: {userName}</strong>
                    </p>
                  </div>
                  <ul className="list-group list-group-flush"  style={{background:"#100d13"}}>
                    <li className="list-group-item"  style={{background:"#100d13"}}>
                      <a
                        className="userlink"
                        onClick={() => setPage("Followers")}
                      >
                        <FaUsers size="1.3rem" /> &nbsp; Followers : {followers}{" "}
                      </a>
                    </li>
                    <li className="list-group-item" style={{background:"#100d13"}}>
                      <a
                        className="userlink"
                        onClick={() => setPage("Followings")}
                      >
                        <FaUsers size="1.3rem" /> &nbsp; Followings: {following}
                      </a>
                    </li>
                    <li className="list-group-item" style={{background:"#100d13"}}>
                      <a className="userlink" onClick={() => setPage("Repos")}>
                        <FaGithubAlt size="1.3rem" /> &nbsp; Repositories :{" "}
                        {public_repos}
                      </a>
                    </li>
                  </ul>
                  <div className="card-body">
                    <a
                      href={html_url}
                      className="mylink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go To Profile
                    </a>
                    <br />
                  </div>
                </div>
              ) : (
                "User Not Found"
              )}
            </div>
          </div>
          <div className="col-lg-6 offset-lg-6 ">
            <div className="overflow-auto">{currentPage(page)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
