import Post from "../Post"
import { useContext, useEffect, useState } from 'react';

export default function IndexPage(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/createNewPost').then(response => {
          response.json().then(posts => {
            console.log(posts);
            setPosts(posts);
          });
        });
      }, []);
    return (
        <>
        {posts.length >0 && posts.map(post=>(
            <Post {...post}/>))}

            {/* <Post />
            <Post />
            <Post /> */}
        </>
    )
}