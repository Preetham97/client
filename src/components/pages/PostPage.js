import { useEffect, useState,  } from 'react'
import {useParams} from 'react-router-dom'
import {formatISO9075} from 'date-fns';

export default function PostPage(){
    const {id} = useParams();
    const [postInfo, setPostInfo] = useState('');
    useEffect(()=>{
        console.log(id);
        fetch(`http://localhost:4000/Post/${id}`)
        .then(response =>{
            response.json().then(postInfo =>{
                setPostInfo(postInfo);
                // console.log("postInfo.cover");
                // console.log(postInfo.cover);
            })
        })
    },[]);
    if(!postInfo){
        return '';
    }
   
    return(
        <div className = "Post-Page">
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className = "author">By {postInfo.author.username}</div>
            <div className = "Image"></div>
            <img src = {`http://localhost:4000/${postInfo.cover}`} alt = ""/>
            <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
        </div>
    );
} 