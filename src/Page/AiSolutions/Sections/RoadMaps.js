import React from 'react'

import { RoadMap2 } from './RoadMaps/RoadMap2'
import { RoadMap1 } from './RoadMaps/RoadMap1'
import { RoadMap3 } from './RoadMaps/RoadMap3'
import { RoadMap4 } from './RoadMaps/RoadMap4'
import { RoadMap5 } from './RoadMaps/RoadMap5'
import { Box, Paper, Stack } from '@mui/material'
import { Title } from './RoadMaps/Title'

export const RoadMap = () => {
    return (
        <>
            <Box padding={{ xs: "5%", sm: "5%", md: "5%" }}>
                <Paper elevation={24}
                    sx={{ backgroundColor: "#F8F8F8" }}
                >
                    <Stack spacing={5} padding={5}>
                        <Title />
                        <RoadMap1 />
                        <RoadMap2 />
                        <RoadMap3 />
                        <RoadMap4 />
                        <RoadMap5 />
                    </Stack>
                </Paper>
            </Box>
        </>
    )
}
