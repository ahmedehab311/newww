import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, Box, Typography } from "@mui/material";
import { OutlinedInput } from "@mui/material";

function box2() {
  return (
    <>
      <Box sx={{ display: "flex", color: "#fff", fontSize: "25px" }}>
        <Box sx={{ display: "flex" }}>
          <Stack>
            <LocationOnIcon />
          </Stack>
          <Stack>Location</Stack>
          <input type="text" className="inputFooter" />
        </Box>
        <Stack>
        </Stack>
      </Box>
          <Stack sx={{ mt: 4 }}>all right to @anadl </Stack>
    </>
  );
}

export default box2;
