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

export const Card1 = () => {
    return (
        <Card
            sx={{
                width: 320,
                maxWidth: '200%',
                boxShadow: 'lg',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'justify' }}>
                <Avatar src="https://static.wixstatic.com/media/22d803_390306064a7f4dcab65c408b8ad281e1~mv2.png/v1/crop/x_0,y_49,w_341,h_283/fill/w_403,h_334,al_c,lg_1,q_85,enc_auto/profile.png"
                    sx={{ '--Avatar-size': '16rem' }}
                />
                <Typography level="body-sm" sx={{ maxWidth: '26ch' }}>
                    Founder
                </Typography>
                <Typography level="title-lg">Andrew Keh</Typography>
                <Typography level="body-xm" sx={{ maxWidth: '26ch' }}>
                    Over a decade of experience in applied R&D
                </Typography>
                <Typography level="body-xm" sx={{ maxWidth: '26ch' }}>
                    ERP/MRP, CAD/CAM and database exper
                </Typography>
                <Typography level="body-xm" sx={{ maxWidth: '26ch' }}>
                    Consortium for Operational Excellence in Retailing (Harvard and Wharton)
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 15,
                        '& > button': { borderRadius: '2rem' },
                    }}
                >
                    <IconButton component="a" href="https://github.com/andykeh710" target="_blank">
                        <SvgIcon>
                            <GitHubIcon />
                        </SvgIcon>
                    </IconButton>
                    <IconButton component="a" href="https://www.linkedin.com/in/andy-keh" target="_blank">
                        <SvgIcon>
                            <LinkedInIcon />
                        </SvgIcon>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}
