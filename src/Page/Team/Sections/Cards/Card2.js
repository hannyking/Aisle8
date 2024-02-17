import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Card2 = () => {
    return (
        <Card
            sx={{
                width: 320,
                maxWidth: '200%',
                boxShadow: 'lg',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'justify' }}>
                <Avatar src="https://static.wixstatic.com/media/22d803_2574c585601f440db0fe0e108b769a4f~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1700890846580.jpg"
                    sx={{ '--Avatar-size': '16rem' }}
                />
                <Typography level="body-sm" sx={{ maxWidth: '26ch' }}>
                    Applied A.I. & Data Scientist
                </Typography>
                <Typography level="title-lg">Andrew Keh</Typography>
                <Typography level="body-xm" sx={{ maxWidth: '26ch' }}>
                    AI expert, CUHK Masters Graduate
                </Typography>
                <Typography level="body-xm" sx={{ maxWidth: '26ch' }}>
                    Bachelor of Science in Computer Science The Chinese University of Hong Kong
                </Typography>
                <Typography level="body-xm" sx={{ maxWidth: '26ch' }}>
                    Master of Philosophy in Mechanical &; Automation Engineering
                </Typography>
                <Typography level="body-xm" sx={{ maxWidth: '26ch' }}>
                    Thesis : Multi-Camera PCB (Printed Circuit Board) Inspection Method
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 2,
                        '& > button': { borderRadius: '2rem' },
                    }}
                >
                    <IconButton component="a" href="https://github.com/codedoodler" target="_blank">
                        <SvgIcon>
                            <GitHubIcon />
                        </SvgIcon>
                    </IconButton>
                    <IconButton component="a" href="https://www.linkedin.com/in/borislav-dzodzo-2279875/" target="_blank">
                        <SvgIcon>
                            <LinkedInIcon />
                        </SvgIcon>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}
