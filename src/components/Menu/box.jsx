import { Stack, Container, Typography, Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
function box() {
  return (
    <Container>
      <Card sx={{ maxWidth: 230, p: 1 }}>
        <CardHeader
          sx={{ textAlign: "center", fontWeight: "bold" }}
          title="appetizers"
        />
        <CardMedia
          component="img"
          height="194"
          image="git push -u origin main/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <Typography>appetizers</Typography>
        <Typography>شيبسي وصلصة</Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography>gunmale 65 EGP</Typography>
          <Typography>house made ratfch 40 EGP</Typography>
        </Box>
      </Card>
    </Container>
  );
}

export default box;
