import { Box, Typography, Stack } from "@mui/material"

export function CompanyBackground() {
    return (
        <Box sx={{
            backgroundImage: "url(https://static.wixstatic.com/media/a3c153_56669e38ce904a728a6246879d546efe~mv2.jpg/v1/fill/w_1246,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_56669e38ce904a728a6246879d546efe~mv2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 600,
            display: "flex",
            justifyContent: "center",
        }}>
            <Box sx={{ width: { xs: "100%", sm: "50%", md: "60%" }, padding: { xs: 8, sm: 5, md: 25 } }}>
                <Box sx={{ background: "white", opacity: "0.8", borderRadius: "16px", padding: 5 }}>
                    <Stack spacing={2}>
                        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
                            Our services
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 18 }} align="center">
                            At AIsle8, we specialize in developing cutting-edge AI solutions tailored to transform enterprise operations. We cater specifically to organizations that need AI but lack an in-house tech focus. Our bespoke AI models and strategies are designed to empower these organizations to overcome contemporary challenges and seize the vast opportunities presented by today's fast-paced business environment.
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}