import React from 'react';
import "../styles/Reviews.css";
import { Grid, Card, Typography, CardContent } from '@mui/material';

const Reviews = ({ content }) => {
    return (
        <Grid
            item
            id='reviews'
            container
            spacing={2}
            style={{
                marginTop: "0px",
                width: "100%",
                marginLeft: "0px"
            }}
        >
            {content.map(review => {
                return (
                    <Grid
                        item
                        key={`reviews${content.indexOf(review)}`}
                        xs={12}
                        sm={6}
                        md={3}
                        style={{
                            paddingLeft: '0',
                            paddingTop: '0',
                            paddingBottom: '20px'
                        }}
                    >
                        <Card 
                            style={{
                                display: 'block',
                                flexDirection: 'column',
                                textAlign: 'center',
                                boxShadow: 'none'
                            }}
                        >
                            <CardContent className='review'>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {review.username}
                                </Typography>
                                <Typography
                                    variant="h6"
                                >
                                    {review.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default Reviews;