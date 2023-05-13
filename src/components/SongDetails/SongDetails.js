import { Divider, Typography } from '@mui/material';
import { Box, color, Stack } from '@mui/system';
import React from 'react'

const SongDetails = (props) => {
    const { selectedId, songs } = props;
    const songDetails = selectedId ? songs.find(song => song.id === selectedId) : '1';


  return (
    <Box
        sx={{
            width: "90%",
            height: "100%",
            background: "linear-gradient(#2d294d, #111111)",
            px: "10%",
            py: "10%",
            borderRadius: "1rem",
            color: "white"
        }}
    >
        {SongDetails && (
            <Stack direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
            >
                <img src={songDetails?.image} style={{
                    height: "60%",
                    width: "60%",
                }}/>
                <Box>
                <h3>{songDetails?.title}</h3>
                <h5 style={{color: "#b5b5b5"}}>{songDetails?.artist_name}</h5>
                <Divider variant='#b5b5b5' sx={{background: "white"}}/>
                </Box>
                <h5>Weeks on the chart : {songDetails.weeks_on_chart}</h5>
                <h5>Rank : {songDetails.rank}</h5>
                <h5>Total plays : {songDetails.total_plays}</h5>
                <h5>Total unique plays : {songDetails.unique_plays}</h5>
                <h5>Completion Rate : {songDetails.completion_rate}%</h5>
            </Stack>
        )}
    </Box>
  );
}

export default SongDetails