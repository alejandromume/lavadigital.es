import React, { useEffect, useState, useRef } from 'react';

function ModalVideo({ videoId, channel, isOpen, onClose, autoplay }) {
  const closeBtn = useRef(null);
  const [fullVideoUrl, setFullVideoUrl] = useState("");

  useEffect(() => {
    if (channel === 'youtube') {
      setFullVideoUrl(getYoutubeUrl(videoId))
    } else if (channel === 'vimeo') {
      setFullVideoUrl(getVimeoUrl(videoId))
    }
  }, [channel, videoId]);

  function getYoutubeUrl(videoId) {
    return '//www.youtube.com/embed/' + videoId
  }

  function getVimeoUrl(videoId) {
    return '//player.vimeo.com/video/' + videoId
  }

  return (
    isOpen ? (
      <div
        className="modal-video"
        tabIndex='-1'
        role='dialog'
        aria-label="video"
        onClick={onClose}
      >
        <div className="modal-video-body">
          <div className="modal-video-inner">
            <button
              className="modal-video-close-btn"
              aria-label="video"
              ref={closeBtn}
              onClick={onClose}
            />
            <div className="modal-video-movie-wrap">
              <iframe
                width='460'
                height='230'
                src={fullVideoUrl}
                allowFullScreen="allowFullScreen"
                autoPlay={autoplay || false}
                tabIndex='-1'
              />
            </div>
          </div>
        </div>
      </div>
    )
      :
      null
  )
}

export default ModalVideo