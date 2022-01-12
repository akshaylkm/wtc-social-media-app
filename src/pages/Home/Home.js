
import TopBar from '../../components/TopBar/TopBar'
import LeftBar from '../../components/LeftBar/LeftBar'
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import "./home.css"


function Home() {
    return (
        <>
       <TopBar/>
       <div className='homeContainer'>
       <LeftBar/>
       <Feed/>
       <RightBar/>
       </div>
       </>
    )
}

export default Home
