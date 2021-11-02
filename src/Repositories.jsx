import React, {useEffect, useState} from 'react'
import RepoCard from './RepoCard'

const Repositories = (props) => {
    const [repoData, setRepoData] = useState([]);
    const getRepoInfo = async() =>{
        try{
            let url = `https://api.github.com/users/${props.userName}/repos`;
            let res = await fetch(url);
            let data = await res.json();
            setRepoData(data);
            
        }catch(error){

        }
    }
    useEffect(() => {
        getRepoInfo()
    }, [])

    return (
        <div className="Container">
            <center><h2 className="my-5">All Repositories of {props.userName}</h2></center>
            <div className="mx-auto">
            <div className="row m-auto">
                
                {
                    repoData.map((repo)=>{
                        return <RepoCard repo={repo} key={repo.id} />
                    })
                }
            
        </div>
            </div>
        </div>
    )
}

export default Repositories
