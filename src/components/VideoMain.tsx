import React from 'react';
import {CardActionArea, CardMedia} from "@mui/material";
import {Video} from "../interfaces";

interface VideoMainProps {
    video: Video;
}

const VideoMain = ({video}: VideoMainProps) => {

    const url = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <CardActionArea sx={{height: '70%'}}>
            <CardMedia
                component="iframe"
                src={url}
                style={{height: '100%'}}
            />
        </CardActionArea>
    );
};

export default VideoMain;