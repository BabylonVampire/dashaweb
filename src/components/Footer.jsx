import React, { useState } from "react";
import '../styles/Footer.css'
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = ({ links }) => {

    const [onTg, setOnTg] = useState(false);
    const [onWU, setOnWU] = useState(false);
    const [onPhone, setOnPhone] = useState(false);

    return (
        <div
            className="pbox"
            id="footer"
        >
            <Box
                container
                spacing={2}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'block' }
                }}
            >
                <IconButton
                    href={links.tg}
                    sx={{ ml: 1 }}
                    style={{
                        backgroundColor: onTg ? 'rgb(0 102 153)' : '#08c',
                    }}
                    onMouseOver={() => setOnTg(true)}
                    onMouseLeave={() => setOnTg(false)}
                >
                    <TelegramIcon
                        style={{
                            color: 'white',
                        }}
                    />
                </IconButton>
                <IconButton
                    href={links.wa}
                    sx={{ ml: 1 }}
                    style={{
                        backgroundColor: onWU ? 'rgb(38 126 49)' : '#43d854',
                    }}
                    onMouseOver={() => setOnWU(true)}
                    onMouseLeave={() => setOnWU(false)}
                >
                    <WhatsAppIcon
                        style={{
                            color: 'white'
                        }}
                    />
                </IconButton>
                <IconButton
                    href={links.phone}
                    sx={{ ml: 1 }}
                    style={{
                        backgroundColor: onPhone ? 'rgb(15 98 71)' : '#1aaa7b',
                    }}
                    onMouseOver={() => setOnPhone(true)}
                    onMouseLeave={() => setOnPhone(false)}
                >
                    <PhoneIcon
                        style={{
                            color: 'white'
                        }}
                    />
                </IconButton>
            </Box>
        </div>
    )
}
export default Footer;