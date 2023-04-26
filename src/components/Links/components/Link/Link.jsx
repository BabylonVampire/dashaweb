import React from 'react';
import './Link.css';

const Link = ({ link }) => {
    return (
        <div className='link element-animation'>
            <div
                href={link.link}
                className={`linkImg linkImg${link.source}`}
            />
            <div className='linkDescriptionBox'>
                <p className='linkDescription'>
                    {link.description}
                </p>
            </div>
        </div>
    )
}

export default Link;