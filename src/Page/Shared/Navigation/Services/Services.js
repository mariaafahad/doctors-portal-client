import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../../../Home/Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitening.png';



const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person s teeth to improve health and reduce the risk of cavities.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'If dental decay is caught in its early stages – before it progresses into the tooth, a filling may not be necessary. In fact, it can take four to eight years for surface decay to penetrate into the tooth s inner layers, when fillings would be necessary.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'The quickest, most dramatic way to whiten is to get an in-office bleaching at a dentist s office. Using professional-strength hydrogen peroxide and special lights or lasers, your dentist can remove even deep stains in about an hour.',
        img: whitening
    }
]


const Services = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ fontWeight: 500, color: 'info.main', m: 2 }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600, m: 5 }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;