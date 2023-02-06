import {formatISO9075} from 'date-fns';
import {Link} from 'react-router-dom'

export default function Post({_id, title, summary,cover, content, createdAt, author}){
    return (
        <div className = "post">
        <div className= "Image">
        <Link to = {`/Post/${_id}`}>
            <img src = {'http://localhost:4000/'+cover}></img>
          </Link>

        </div>
        <div className="texts">
        <Link to = {`/Post/${_id}`}>
          <h2>{title}</h2>
          </Link>
          <p className="Info">
            <a className = "author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>     
          <p className="Summary">{summary} </p>
        </div>
        </div>
    );
}

