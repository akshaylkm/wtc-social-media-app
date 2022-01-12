import "./Post.css"
import {MoreVert} from "@mui/icons-material"
import { useState } from "react"
function Post() {
    const [like,setLike]=useState(0)
    const likehandler =()=>{
        setLike(like+1)
    }
    return (
        <div className="post">
         <div className="postwraper">
         <div className="posttop">
             <div className="posttopleft">
                 <img className="postprofileimg" src="/Assets/IMG_20210728_153908.jpg" alt="" />
                 <span className="postusername">Akshay KM</span>
                 <span className="postusertime">1 min ago</span>
             </div>
             <div className="posttopright">
                 <MoreVert className="postmore"/>
             </div>
         </div>
         <div className="postcenter">
             <span className="posttext">React js</span>
             <img className="postimg" src="/Assets/logo-og.png" alt="" /></div>   
         <div className="postbottom">
             <div className="postbottomleft">
                 <img className="likeicon" src="/Assets/heart-5614865_1280.png" onClick={likehandler} alt="" />
                 <span className="postlikecounter">{like} likes .</span>
             </div>
             <div className="postbottomright">
                 <span className="commends">9 commends</span>
             </div>
         </div>
         </div>
        </div>
    )
}

export default Post
