import React, { useState } from 'react'
import "./videSection.scss"
import VideoPreview from "./../../assets/images/video-player-placeholder.png"
import PlayIcon from "./../../assets/images/play-icon.png"
import ModalVideo from 'react-modal-video'


const VideoSection = () => {
	const [isOpen, setOpen] = useState(false)
    return (
        <div className="video-section-container">
            <div className="video-section-wrapper">
                <div className="video-preview-wrapper">
                    <img src={VideoPreview} alt="Video Preview" className='video-preview' />
                    <img src={PlayIcon} alt="Video Preview" className='play-icon' onClick={() => setOpen(true)} />

                </div>
                <div className="section-descriptions-container">
                    <h3 >
                        Get To Know Us a Little Better!
                    </h3>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
                        faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
                        mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
                        congue ut, luctus a nulla. Donec sit amet sapien neque, id
                        ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
                        elit congue lacinia.
                        <br />
                        <p >
                            Nullam tellus turpis, fringilla sit amet congue ut, luctus a
                            nulla. Donec sit amet <br />
                            sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
                            pellentesque arcu a elit congue lacinia.
                        </p>
                    </p>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="geAuAp0XUIY" onClose={() => setOpen(false)} />
        </div>

    )
}

export default VideoSection