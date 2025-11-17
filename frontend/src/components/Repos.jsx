import React from 'react'

const Repos = ({ repos }) => {
    
    console.log(repos);


    if (!repos.blobs_url) {
        return <>No Repo blob_url found... sorry buddy</>
    }
    
    return <>{repos.blobs_url}</>;
}

export default Repos