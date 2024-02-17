import { Box, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export const RoadMapx = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Box
        sx={{
          height: { xs: "50vh", sm: "60vh", md: "60vh" },
          width: { xs: "100%", sm: "50%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
        }}
      >
        <Box sx={{
          width: { xs: "100%", sm: "50%", md: "60%" },
        }}
        >
          <Box sx={{ padding: 5 }}>
            <Stack direction="row" spacing={2}>
              <SearchIcon sx={{ fontSize: 100 }} />
              <Typography
                variant="h4"
                align="left"
                sx={{ fontWeight: "bold" }}>
                1. Challenge Identification
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
                sx={{
                    height: { xs: "100%", sm: "50%", md: "60vh" },
                    width: { xs: "100%", sm: "50%", md: "50%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    marginRight: { sm: 0, md: 25 },
                    width: { xs: "80%", sm: "50%", md: "60%" },
                }}
                >
                    <Stack spacing={2}>
                        <Typography
                            align="justify"
                            color="black"
                            variant="body1"
                            sx={{ fontSize: 28 }}
                        >
                            Comprehensive analysis to identify specific business challenges.
                        </Typography>
                        <Typography
                            align="justify"
                            color="black"
                            variant="body1"
                            sx={{ fontSize: 28 }}
                        >
                            Customizing AI impact areas based on your unique needs.
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Stack >
      )
}
