import { Player, ControlBar, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';

const VideoPlayer = () => {
    return <div>
        <Player
            src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
            poster='./ima-poster.jpg'
        >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false}>
                <ForwardControl seconds={10} order={3.1} />
                <ReplayControl seconds={10} order={3.2} />
            </ControlBar>
        </Player>
    </div>
}

export default VideoPlayer