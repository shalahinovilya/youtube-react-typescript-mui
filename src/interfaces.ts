export interface Video {
    id: {
        kind: string,
        videoId: string
    },
    snippet: {
        thumbnails: {
            medium: {
                url: string
            }
        },
        title: string
    }
}