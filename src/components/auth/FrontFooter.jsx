import React, { useEffect, useState, useCallback } from 'react'
import './../../assets/styles/front.css'
import Box from '@mui/material/Box';
import 'poppins-font';
import 'fontsource-pridi';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Pagination, Stack, styled, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = styled(Typography)(() => ({
    padding: '40px',
    textAlign: 'center',
    color: 'white',
    fontSize: 20
}))

const FrontFooter = () => {


    return (
        <Box sx={{ background: 'black' }}>
            <Footer className='footer1'>
                Loremem  epsumn conter  h Loremem epsumn conter gfghn   h Loremem epsumn conter gfghn gfghn h Loremem epsumn conter gfghn h Loremem epsumn conter gfghn h Loreme Loremem.
            </Footer>
        </Box>
    );
}
export default FrontFooter;
