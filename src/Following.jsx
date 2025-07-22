import React, { useCallback, useEffect, useState } from "react";

const Following = (props) => {
  const [subData, setSubData] = useState([]);
  const getFInfo = useCallback(async () => {
    try {
      let res = await fetch(props.following.url);
      let data = await res.json();
      let { login, name, html_url, public_repos, followers, following } = data;

      setSubData({ login, name, html_url, public_repos, followers, following });
    } catch (error) {}
  }, []);
  useEffect(() => {
    getFInfo();
  }, [getFInfo]);
  return (
    <>
      <div
        className="card mycard mb-3 card-content"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.following.avatar_url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="list-group list-group-flush card-content">
              <h5 className="list-group-item card-content">
                {props.following.login} &nbsp; {subData.name}
              </h5>
              <li className="list-group-item card-content">
                Followers : {subData.followers} &nbsp;&nbsp;&nbsp; Following :{" "}
                {subData.following}
              </li>
              <li className="list-group-item card-content">
                Number of Repositories : {subData.public_repos}
              </li>
              <div className="card-body">
                <a
                  href={subData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go To Profile of {subData.login}{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Following;
