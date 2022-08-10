import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ExploreDetails() {

    const { id } = useParams();

    const [explores, setExplores] = useState([]);
    const [details, setDetails] = useEffect({});

    useEffect(() => {
        fetch("./explore.json")
            .then(resp => resp.json())
        .then(data => setExplores(data))
    }, [])

    console.log(explores?.length, "asdf")
    console.log("asdfasdf");
    
    

    
    
   
    return (
        <div>
          
    
        </div>
    );
};

export default ExploreDetails;