import { Box, Button } from "@mui/material";
import "./Error.css";
import img from "../../assets/images/404.png";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <Box className="errorPage">
      <img src={img} alt="error" />
      <Link to="/">
        <Button variant="contained" color="success">
          Go to home Page
        </Button>
      </Link>
    </Box>
  );
}
