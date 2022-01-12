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
                 <img className="postprofileimg" src="https://media-exp1.licdn.com/dms/image/C4D03AQGSv0p0PjJkFg/profile-displayphoto-shrink_100_100/0/1627492765694?e=1647475200&v=beta&t=7naXEdQ-koMJoER9ueR9TPC5Xn152MugpS_7rQLPt3I" alt="ak" />
                 <span className="postusername">Akshay KM</span>
                 <span className="postusertime">1 min ago</span>
             </div>
             <div className="posttopright">
                 <MoreVert className="postmore"/>
             </div>
         </div>
         <div className="postcenter">
             <span className="posttext">React js</span>
             <img className="postimg" src="https://wallpaperaccess.com/full/3909258.jpg" alt="" /></div>   
         <div className="postbottom">
             <div className="postbottomleft">
                 <img className="likeicon" src="https://www.kindpng.com/picc/m/697-6979063_instagram-like-icon-png-clipart-png-download-love.png" onClick={likehandler} alt="" />
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
