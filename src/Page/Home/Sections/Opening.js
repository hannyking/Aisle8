import { Container, Stack, Typography, Box, Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";

export function Opening() {
    return (
            <Container sx={{ height: "80vh" }}>
                <Stack sx={{ height: "100%" }} justifyContent="center" align="center">
                    <Typography variant="h1">
                        Aisle8
                    </Typography>
                    <Typography variant="h2">
                        Transforming Businesses with Intelligent AI Integration
                    </Typography>
                    <Box sx={{ padding: "60px" }} textAlign='center'>
                        <Button variant="outlined" sx={{ borderRadius: 8, height: 45, width: 180 }}>
                        <HashLink smooth to="/Team#contact" style={{ color: '#5F5BCD', textDecoration: 'none' }}>
                            Contact Us
                        </HashLink>
                        </Button>
                    </Box>
                </Stack>
            </Container>
    )
}