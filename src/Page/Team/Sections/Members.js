import * as React from 'react';
import { Card1 } from "./Cards/Card1"
import { Card2 } from './Cards/Card2';
import { Box, Stack, Typography } from '@mui/material';
import "./Sections.css"


export const Members = () => {
  return (
    <>
      <Stack
        align="center"
        justifyContent="center"
        spacing={5}
        sx={{
          height: "100%",
          padding: { xs: 5, sm: 5, md: "5%" }
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Meet the Team
        </Typography>
        <Box
          align="center"
          justifyContent="center"
        >
          <hr className='black' />
        </Box>
        <Typography variant="body1"
          sx={{
            fontSize: "30",
            pr: { xs: 0, sm: 0, md: "5%" },
            pl: { xs: 0, sm: 0, md: "5%" }
          }}>
          At Web3 Research Ltd., we take immense pride in our team, a dynamic collection of industry-leading minds. Our strength lies in our diversity, with each member contributing unique and extensive experience. Our expertise spans a range of critical disciplines, including advanced AI in robotics, sophisticated supply chain operations, cutting-edge R&D at Berkshire Hathaway Shoe Holdings, complex data management for government, and expertise in finance and blockchain technology.
        </Typography>
      </Stack>
      <Box display={'flex'} justifyContent={`center`}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, sm: 5, md: 20 }}>
          <Card1 />
          <Card2 />
        </Stack>
      </Box>
    </>
  )
}
