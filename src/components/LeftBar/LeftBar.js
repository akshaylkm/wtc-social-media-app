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
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  <li className="leftbarfriend">
                      <img className="leftbarfriendimg" src="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg" alt="nev" />
                      <span className="leftbarfriendname">Elon Musk</span>
                  </li>
                  
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
