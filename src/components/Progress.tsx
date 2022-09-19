import React from 'react';
import {CircularProgress, Grid, Paper} from "@mui/material";

const Progress = () => {
    return (
        <Grid item xs={12}> <Paper sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '50px',
            marginTop: '6rem',
        }} elevation={0}>
            <CircularProgress size='5rem'/>
        </Paper></Grid>
    );
};

export default Progress;