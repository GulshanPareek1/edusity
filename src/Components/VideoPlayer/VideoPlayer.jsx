import "./VideoPlayer.css";
import video from "../../assets/college.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
    const videoRef = useRef(null);
    const handleClickOutside = (event)=>{
        if(videoRef.current===event.target ){
            setPlayState(false);
        }
    };
    
	return (
		<div className={`video-player ${playState ? "" : "hide"}`} ref={videoRef} onClick={handleClickOutside}>
			<video
				src={video}
				autoPlay
				muted
				controls></video>
		</div>
	);
};

export default VideoPlayer;
