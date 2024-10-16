import React from 'react'
import { useParams } from 'react-router-dom'

export default function User(){
    const {userid} = useParams();
    return(
        <div className=' bg-violet-700 text-white text-3xl p-9  text-center'>
            User : {userid}
        </div>
    )
}