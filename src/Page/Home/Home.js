import { Stack } from "@mui/material";
import { BusinessModel } from "./Sections/BusinessModel";
import { CompanyBackground } from "./Sections/CompanyBackground";
import { Opening } from "./Sections/Opening";


export function Home() {
    return (
        <>
            <Opening />
            <CompanyBackground />
                <Stack padding={5}>
                    <BusinessModel />
                </Stack>
        </>
    )
}