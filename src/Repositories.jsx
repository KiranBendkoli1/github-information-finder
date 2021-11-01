import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import RepoCard from './RepoCard'

const Repositories = (props) => {
    const [repoData, setRepoData] = useState([]);
    const userName= useParams();
    console.log(userName);
    let {userName:uname} = userName; 

    const getRepoInfo = async() =>{
        try{
            let url = `https://api.github.com/users/${uname}/repos`;
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            setRepoData(data);
            
        }catch(error){

        }
    }
    useEffect(() => {
        getRepoInfo()
    }, [])

    return (
        <div className="Container">
            <center><h2 className="my-5">All Repositories of {uname}</h2></center>
            <div className="col-8 mx-auto">
            <div className="row">
                
                {
                    repoData.map((repo, id)=>{
                        return <RepoCard repo={repo} key={repo.id} />
                    })
                }
            
        </div>
            </div>
        </div>
    )
}

export default Repositories
