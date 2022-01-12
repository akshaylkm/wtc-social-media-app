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
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGSv0p0PjJkFg/profile-displayphoto-shrink_400_400/0/1627492765694?e=1647475200&v=beta&t=Nk23bWtPUozjt6HwscxjXK1_Wrx1B_wg_8TNKcSfgDs" alt="" className="profilepic" />
          </div>
        </div>
    )
}

export default TopBar
