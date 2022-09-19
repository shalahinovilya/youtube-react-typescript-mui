import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";

const NoVideoBlock = () => {
    return (
        <Grid item xs={12}>
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '5rem',
                }}
                elevation={0}
            >
                <Typography sx={{fontSize: '6rem'}} >Please, select a video</Typography>
            </Paper>
        </Grid>
    );
};

export default NoVideoBlock;