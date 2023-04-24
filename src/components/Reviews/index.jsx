import React from 'react';
import "./Reviews.css";
import { Grid, Card, Typography, CardContent } from '@mui/material';

const Reviews = ({ content }) => {
    return (
        <Grid
            className='reviews element-animation'
            item
            container
            spacing={2}
        >
            {content.map(review => {
                return (
                    <Grid
                        className='reviewsBox'
                        item
                        key={`reviews${content.indexOf(review)}`}
                        xs={12}
                        sm={6}
                        md={3}
                    >
                        <Card className='reviewCard'>
                            <CardContent className='review'>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {review.username}
                                </Typography>
                                <Typography variant="h6">
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