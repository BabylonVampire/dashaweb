import "../styles/Heading.css";
import { Box, Typography } from "@mui/material"

const Heading = ({tytle, subtytle}) => {
    return(
        <Box className="heading"
            sx={{
                backgroundSize: {lg: `600px 225px`, md: `600px 225px`, ml: `600px 225px`, xs: `480px 179px`}
            }}
        >
            <p className="h1">
                {tytle}
            </p>
            <p className="h2">
                {subtytle}
            </p>
        </Box>
    )
}

export default Heading;