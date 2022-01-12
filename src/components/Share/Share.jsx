import "./Share.css"
import {PermMedia,Label,Room, EmojiEmotions} from '@mui/icons-material'
function Share() {
    return (
        <div className="share">
            <div className="sharewraper">
                <div className="sharetop">
                   <img className="shareprofileimg" src="/Assets/IMG_20210728_153908.jpg" alt="" />
                    <input placeholder="Whats in your mind?" className="shareinput" />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shareoption">
                            <PermMedia htmlColor="red" className="shareicon"/>
                            <span className="shareoptiontext">Photos or Video</span>
                        </div>
                        <div className="shareoption">
                            <Label htmlColor="green" className="shareicon"/>
                            <span className="shareoptiontext">Tag</span>
                        </div>
                        <div className="shareoption">
                            <Room htmlColor="blue" className="shareicon"/>
                            <span className="shareoptiontext">Location</span>
                        </div>
                        <div className="shareoption">
                            <EmojiEmotions htmlColor="orange" className="shareicon"/>
                            <span className="shareoptiontext">Feelings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share
