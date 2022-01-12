import "./LeftBar.css"
import {RssFeed,Chat,PlayCircleFilledOutlined, Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,School} from '@mui/icons-material'
function LeftBar() {
    return (
        <div className="leftbar">
            <div className="leftbarwraper">
                <ul className="leftbarlist">
                    <li className="leftbarlistitems">
                        <RssFeed className="leftbaricon"/>
                        <span className="leftbartexticontext">Feeds</span>
                    </li>
                    <li className="leftbarlistitems">
                        <Chat className="leftbaricon"/>
                        <span className="leftbartexticontext">Chat</span>
                    </li>
                    <li className="leftbarlistitems">
                        <PlayCircleFilledOutlined className="leftbaricon"/>
                        <span className="leftbartexticontext">Videos</span>
                    </li>
                    <li className="leftbarlistitems">
                        <Group className="leftbaricon"/>
                        <span className="leftbartexticontext">Groups</span>
                    </li>
                    <li className="leftbarlistitems">
                        <Bookmark className="leftbaricon"/>
                        <span className="leftbartexticontext">Bookmarks</span>
                    </li>
                    <li className="leftbarlistitems">
                        <HelpOutline className="leftbaricon"/>
                        <span className="leftbartexticontext">Questions</span>
                    </li>
                    <li className="leftbarlistitems">
                        <WorkOutline className="leftbaricon"/>
                        <span className="leftbartexticontext">Jobs</span>
                    </li>
                    <li className="leftbarlistitems">
                        <Event className="leftbaricon"/>
                        <span className="leftbartexticontext">Events</span>
                    </li>
                    <li className="leftbarlistitems">
                        <School className="leftbaricon"/>
                        <span className="leftbartexticontext">Courses</span>
                    </li>
                </ul>
                <button className="leftbarbutton">Show More</button>
                <hr className="leftbarhr" />
                <ul className="leftbarfriendlist">
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="/Assets/images.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  
                  
                  
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
