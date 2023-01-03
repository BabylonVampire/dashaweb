import "../styles/UpButton.css";
import { Box } from "@mui/material";

const UpButton = () => {
    const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
    return(
        <Box
            id="upButton"
            onClick={scrollToTop}
            sx={{
                display: {
                    xs: `none`,
                    sm: `none`,
                    md: `block`,
                    lg: `block`
                }
            }}
        />
    )
}

export default UpButton;