import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import cavity from '../../../images/treatment.png'

const Dental = () => {
    return (
        <Box container sx={{ flexGrow: 1 }} style={{ margin: "10vh 20vw" }}>
            <Grid container spacing={2} columns={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={4} lg={6} >
                    <img style={{ width: '100%' }} src={cavity} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={6}>
                    <Typography variant="h1">
                        Hello world!
                    </Typography>
                    <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ipsum perferendis unde, sequi magni perspiciatis, vitae maiores veritatis quo, amet obcaecati rem odit quidem consectetur commodi assumenda recusandae doloribus quis cupiditate nesciunt quae corporis debitis dolorem? Enim maiores expedita, odio, explicabo numquam quod aut libero, harum reiciendis quae nihil corporis ab molestias ipsum. Saepe fuga illo odit. Dignissimos adipisci est doloribus magnam nemo incidunt id recusandae magni, itaque dolorum voluptatibus beatae, tenetur dolore quas quae? Adipisci, unde error! Est et cumque corrupti provident ut
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" clor="success" style={{ backgroundColor: '#BAE9E8', color: '#fff', borderRadius: "30" }}>Click me!</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dental;