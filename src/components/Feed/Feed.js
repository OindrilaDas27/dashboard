import { Box, Stack } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

import SongDetails from '../SongDetails/SongDetails';
import { songs } from '../../utils/data';

const Feed = () => {
    const [selectedId, setSelectedId] = useState("1");
    const [selectedSong, setSelectedSong] = useState("");

    const handleClick = (title, songId) => {
        setSelectedSong(title);
        setSelectedId(songId);
      }
    return (
        <Stack
            sx = {{ flexDirection: {sx: "column", md: "row"}, background: "black", height: "100vh"}}
        >
            <Navbar songs={songs} handleClick={handleClick} selectedSong={selectedSong}/>
            <Box sx={{ my: "7rem", mx:"3%", display: "flex", flexDirection: {sx: "column", md: "row"} }}>
                <Box>hello</Box>
                <SongDetails selectedId={selectedId} songs={songs}/>
            </Box>
        </Stack>
    )
}

export default Feed