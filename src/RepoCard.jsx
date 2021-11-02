import React from 'react'

const RepoCard = (props) => {
    return (
        <div className="col-lg-6">
            <div className="card text-dark bg-light mb-3 shadow mt-2" style={{ width: "auto" , height:"20rem"}} >
                <div className="card-body">
                    <h4 className="card-title">{props.repo.name}</h4>
                    <p>{props.repo.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> &nbsp; Created at: {props.repo.created_at} </li>
                    <li className="list-group-item"> &nbsp; Language Used: {props.repo.language} </li>
                    
                </ul>
                <div className="card-body">
                    <a className="card-link" href={props.repo.html_url} rel="noopener noreferrer" target="_blank">Go to Repositories</a>
                </div>
            </div>
        </div>
    )
}

export default RepoCard
