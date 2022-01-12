import "./TopBar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"
function TopBar() {
    return (
        <div className="topbarContainer">
          <div className="topbarLeft">
              <span className="logo">WE TRUST IN CODE</span>
          </div>
          <div className="topbarCenter">
              <div className="search">
                <Search className="searchicon"/>
                <input placeholder="search for friends" className="searchInput" />
              </div>
          </div>
          <div className="topbarRight">
              <div className="topbarLinks">
                  <span className="topbarLink">Home </span>
                  <span className="topbarLink">TimeLine</span>
              </div>
              <div className="topbarIcons">
                  <div className="topbarIconitems">
                      <Person/>
                  </div>
                  <div className="topbarIconitems">
                      <Chat/>
                  </div>
                  <div className="topbarIconitems">
                      <Notifications/>
                  </div>
              </div>
              <img src="Assets\IMG_20210728_153908.jpg" alt="" className="profilepic" />
          </div>
        </div>
    )
}

export default TopBar
