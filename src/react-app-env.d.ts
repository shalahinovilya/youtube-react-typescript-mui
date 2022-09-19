declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_YOUTUBE_BASE_URL: string;
            REACT_APP_YOUTUBE_API_KEY: string;
        }
    }
}

export {}
