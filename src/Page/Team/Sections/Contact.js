import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
    return (
        <div id='contact'>
            <Stack
                sx={{ height: "100%" }}
                pt={"5%"}
                textAlign='center'
            >
                <Typography variant="h1" sx={{ fontWeight: "bold" }} >
                    Contact Aisle8
                </Typography>
                <Typography variant="h4">
                    Drop us a line with any questions, inquiries or business proposals
                </Typography>
            </Stack >
            <Grid
                container
                spacing={5}
                pt={"5%"}
                pl={"15%"}
                pr={"15%"}
                pb={"5%"}
            >
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="outlined-password-input"
                        label="First Name"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="outlined-password-input"
                        label="Last Name"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="outlined-password-input"
                        label="Email *"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="outlined-password-input"
                        label="Phone"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                fullWidth
                                multiline
                                id="outlined-multiline-static"
                                label="Leave us a message..."
                                rows={4}
                            />
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <Box display={'flex'} justifyContent={`center`}>
                <Box width={`50%`}>
                    <Button fullWidth variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </Box>
        </div>
    )
}
