export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/GitNinja36');
    return Response.json();
};

import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() { 
    const Data = useLoaderData()
    // const [Data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(Response => Response.json())
    //     .then(Data =>{
    //         console.log(Data);
    //         setData(Data)
    //     })
    // }, [])
    return(
        <div 
            className=
                'text-center bg-violet-700 text-white p-10 text-3xl'
            >Git Hub Followers : {Data.followers}
            <img src={Data.avatar_url} alt="Git picture" width={300}  />
        </div>
    )
}

