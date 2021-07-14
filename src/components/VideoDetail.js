import React from 'react';
import './styles.css';


const VideoDetail = ({ video }) => {

    if (!video) {
        return <h4>Loading...please wait</h4>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (

        <div>
            <div className="content">
                <iframe title={video.title} styles={{ width: '450px', height: '300px' }} src={videoSrc} />
            </div>
            <div className="ui segment">
                <img className="avatar avatar-custom" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                <p>Published at: {video.snippet.publishTime}</p>
            </div>
        </div>

    );

};

export default VideoDetail;