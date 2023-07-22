import SidePanel from "./SidePanel"
import VideoPlayer from './VideoPlayer'
import SupportingSection from './SupportingSection'
import { useState } from "react"
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp'

const Dashboard = () => {
    const [sidePanelOpen, showHideSidePanel] = useState(true)
    return <div style={{ width: '100%', height: '100vh' }}>
        <div style={{ color: 'white', padding: 10, fontSize: 20, fontWeight: 'bold' }}>Salimi Consultancies</div>
        <div style={{ display: 'flex', height: '100%' }}>
            {sidePanelOpen && <div style={{ background: '#3a3a3a', width: '25%', height: '100%', overflow: 'scroll' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 64,
                    fontWeight: 'bold',
                    background: '#3a3a3a',
                    fontSize: 16,
                    borderBottom: '0.5px solid white'
                }}>
                    <div onClick={() => showHideSidePanel(!sidePanelOpen)} style={{ marginLeft: 16, fontSize: 18, color: 'white', display: 'flex', width: '90%', cursor: 'pointer' }}>
                        <div><FormatListBulletedOutlinedIcon style={{ color: 'white', fontSize: 30 }} /></div>
                        <div style={{ marginLeft: 10, marginTop: 4 }}>Contents</div>
                        <div style={{ marginLeft: 'auto' }}>
                            <HighlightOffSharpIcon style={{ color: 'white', fontSize: 30 }} />
                        </div>
                    </div>
                </div>
                <SidePanel />
            </div>}
            <div style={{ width: sidePanelOpen ? '74%' : '100%', overflow: 'scroll' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 64,
                    position: 'absolute',
                    opacity: 0.5,
                    width: sidePanelOpen ? '74%' : '100%',
                    zIndex: 50,
                    fontWeight: 'bold',
                    background: '#3a3a3a',
                    fontSize: 16,
                    borderBottom: '0.5px solid white'
                }}></div>
                <VideoPlayer />
                <SupportingSection />
            </div>
        </div>
    </div>
}

export default Dashboard