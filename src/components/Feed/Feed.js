import Post from "../Post/Post"
import Share from "../Share/Share"
import "./Feed.css"

function Feed() {
    return (
        <div className="feed">
            <div className="feedwraper">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </div>
        </div>
    )
}

export default Feed
