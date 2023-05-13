import { Box, Stack } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import SongDetails from '../SongDetails/SongDetails';

const Feed = () => {
    return (
        <Stack
            sx = {{ flexDirection: {sx: "column", md: "row"}}}
        >
            <Navbar />
            <Box sx={{ my: "7rem", mx:"3%", display: "flex", flexDirection: {sx: "column", md: "row"} }}>
                <Box>hello</Box>
                <SongDetails />
            </Box>
        </Stack>
    )
}

export default Feed