import React from "react";
import './Footer.css'
import IconGroup from "../../../IconGroup";
import Box from '@mui/material/Box';

const Footer = ({ links }) => {
    return (
        <div className="footer">
            <Box
                container
                spacing={2}
                sx={{
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'block'
                    }
                }}
            >
                <IconGroup links={links}/>
            </Box>
        </div>
    )
}
export default Footer;