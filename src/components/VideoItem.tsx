import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Video} from "../interfaces";

interface VideoItemProps {
    video: Video;
}

const VideoItem = ({video}: VideoItemProps) => {
    return (
        <Grid xs={12} key={video.id.videoId} item>
            <Card
                sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
            >
                <CardMedia
                    sx={{flex: '0 0 50%', height: 140}}
                    component="img"

                    id={video.id.videoId}
                    image={video.snippet.thumbnails.medium.url}
                    alt="thumbnail"
                />
                <CardContent>
                    <Typography
                        variant="body1"
                    >
                        {video.snippet.title.length < 40 ? video.snippet.title : video.snippet.title.slice(0, 40) + '...'}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default VideoItem;