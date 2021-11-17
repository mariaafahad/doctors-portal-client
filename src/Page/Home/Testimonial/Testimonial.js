import { Card, CardContent, Grid, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import ppl1 from '../../../images/people-1.png'
import ppl2 from '../../../images/people-2.png'
import ppl3 from '../../../images/people-3.png'
const color = cyan[400];
const Testimonial = () => {
    return (
        <Grid sx={{ flexGrow: 1, m: 5 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={6}>

                    <Grid item>
                        <Paper sx={{ height: 240, width: 250, p: 2 }}  >
                            <Typography variant="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo, distinctio repudiandae eaque cumque architecto perspiciatis voluptas, corporis enim reiciendis aliquid similique ad quas iste debitis nisi fugit
                            </Typography>
                            <Avatar alt="Remy Sharp" src={ppl1} />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper sx={{ height: 240, width: 250, p: 2 }} >
                            <Typography variant="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo, distinctio repudiandae eaque cumque architecto perspiciatis voluptas, corporis enim reiciendis aliquid similique ad quas iste debitis nisi fugit
                            </Typography>
                            <Avatar alt="Remy Sharp" src={ppl2} />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper sx={{ height: 240, width: 250, p: 2 }}>
                            <Typography variant="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo, distinctio repudiandae eaque cumque architecto perspiciatis voluptas, corporis enim reiciendis aliquid similique ad quas iste debitis nisi fugit
                            </Typography>
                            <Avatar alt="Remy Sharp" src={ppl3} />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Testimonial;