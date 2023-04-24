import React, { useState } from 'react';
import './IconGroup.css';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const IconGroup = ({ links }) => {
    const [onTg, setOnTg] = useState(false);
    const [onWU, setOnWU] = useState(false);
    const [onPhone, setOnPhone] = useState(false);
    return (
        <>
            <IconButton
                className='tgBox'
                href={links.tg}
                sx={{ ml: 1 }}
                style={{
                    backgroundColor: onTg ? 'rgb(0 102 153)' : '#08c',
                }}
                onMouseOver={() => setOnTg(true)}
                onMouseLeave={() => setOnTg(false)}
            >
                <TelegramIcon className='icon' />
            </IconButton>
            <IconButton
                className='waBox'
                href={links.wa}
                sx={{ ml: 1 }}
                style={{
                    backgroundColor: onWU ? 'rgb(38 126 49)' : '#43d854',
                }}
                onMouseOver={() => setOnWU(true)}
                onMouseLeave={() => setOnWU(false)}
            >
                <WhatsAppIcon className='icon' />
            </IconButton>
            <IconButton
                className='phoneBox'
                href={links.phone}
                sx={{ ml: 1 }}
                style={{
                    backgroundColor: onPhone ? 'rgb(15 98 71)' : '#1aaa7b',
                }}
                onMouseOver={() => setOnPhone(true)}
                onMouseLeave={() => setOnPhone(false)}
            >
                <PhoneIcon className='icon' />
            </IconButton>
        </>
    )
}

export default IconGroup;
