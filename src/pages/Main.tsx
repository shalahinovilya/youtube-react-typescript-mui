import React, {useState} from 'react';
import SearchBar from "../components/SearchBar";
import {Grid} from "@mui/material";
import VideoList from "../components/VideoList";
import {Video} from "../interfaces";
import VideoMain from "../components/VideoMain";
import youtube from "../api/youtube";
import Progress from "../components/Progress";
import NoVideoBlock from "../components/NoVideoBlock";


const Main = () => {

    const [videos, setVideos] = useState<Video[]>([])
    const [currentVideo, setCurrentVideo] = useState({} as Video)
    const [isLoading, setIsLoading] = useState(false)

    const currentVideoHandler = async (videoId: string) => {
        const video = videos.find(video => video.id.videoId === videoId)
        if (video) setCurrentVideo(video)
    }

    const fetchVideos = async (search: string) => {

        if (!search) return;

        setIsLoading(true)

        const res = await youtube({
            method: 'get',
            url: `search`,
            params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                type: 'video',
                part: 'snippet',
                q: search
            }
        })

        await setCurrentVideo(res.data.items[0])
        setVideos(res.data.items)
        setIsLoading(false)
    }


    return (
        <Grid sx={{justifyContent: 'center', padding: '15px'}} justifyContent="center" container spacing={10}>
            <Grid sx={{justifyContent: 'center'}} item xs={12}>
                <Grid item container spacing={4}>
                    <Grid item xs={12}>
                        <SearchBar fetchVideos={fetchVideos}/>
                    </Grid>
                    {
                        isLoading ? (<Progress/>) :
                            !currentVideo || !Object.keys(currentVideo).length ? (<NoVideoBlock/>) :
                                (
                                    <>
                                        <Grid item xs={8}>
                                            <VideoMain video={currentVideo}/>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <VideoList
                                                videos={videos}
                                                videoHandler={currentVideoHandler}
                                            />
                                        </Grid>
                                    </>
                                )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Main;
