import * as React from 'react';
import "./Product.css";
import { Box } from '@mui/material';

const Product = ({ name, description, price, img }) => {
    return (
        <Box
            className='product element-animation'
            sx={{
                height: {
                    lg: `300px`,
                    md: `300px`,
                    sm: `275px`,
                    xs: `275px`
                },
                backgroundSize: {
                    lg: `650px 325px`,
                    md: `650px 325px`,
                    sm: `500px 260px`,
                    xs: `475px 250px`
                },
                width: {
                    lg: `700px`,
                    md: `700px`,
                    sm: `450px`,
                    xs: `auto`
                },
            }}
        >
            <img
                className='prodImg'
                src={img}
            />
            <div className='textBox'>
                <p className='h2'>
                    {name}
                </p>
                <p className='h3'>
                    {description}
                </p>
            </div>
        </Box>
    );
}

export default Product;