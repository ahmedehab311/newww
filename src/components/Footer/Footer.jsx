import { Stack, Container, Typography, Box } from "@mui/material";
import Box1 from "./Box1.jsx";
import Box2 from "./Box2.jsx";
import Box3 from "./Box3.jsx";
function Footer() {
    return (
        <Container>
            <Box sx={{ mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #000", background: "red" }}>
                <Stack>
                    <Box1 />k
                </Stack>
                <Stack>
                    <Box2 />
                </Stack>
                <Stack>
                    <Box3 />
                </Stack>
     </Box>

        </Container>
    )
}

export default Footer
