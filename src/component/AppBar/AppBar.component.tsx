import { Box, Button, Toolbar, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PlayCircleRounded";
import "./AppBar.css";

export default function ApplicationBar() {

  return (
    <AppBar>
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Oxolo
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "right",
          }}
        >

        </Box>
      </Toolbar>
    </AppBar>
  );
}
