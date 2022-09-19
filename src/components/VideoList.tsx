import React from 'react';
import {Grid} from "@mui/material";
import {Video} from "../interfaces";
import VideoItem from "./VideoItem";


interface VideoListProps {
    videos: Video[],

    videoHandler(videoId: string): void
}

const VideoList = ({videos, videoHandler}: VideoListProps) => {
    return (
        <Grid
            onClick={(e) => {
                const target = (e.target as Element)
                if (target.tagName === 'IMG') videoHandler(target.id)
            }}
            container spacing={5}
        >
            {videos.map((video: Video) => (
                <VideoItem video={video}/>
            ))}
        </Grid>
    );
};

export default VideoList;