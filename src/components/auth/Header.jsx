import React from 'react'
import './../../assets/styles/front.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import 'poppins-font';
import 'fontsource-pridi';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Stack, styled } from '@mui/material';

import background from './../../assets/images/front/download.png'
import foodbackground from './../../assets/images/front/background.jpeg';
import { Link } from 'react-router-dom';

const MainBox = styled(Box)(() => ({
    backgroundImage: `url(${foodbackground})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}))

const SubTitle = styled(Box)(() => ({
    padding: 55,
    textAlign: 'center'
}))

const Title = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: 32,
    fontFamily: 'Poppins',
    color: 'rgba(228, 80, 29, 1)',
    borderBottom: '5px solid #E4501D',
    display: 'inline',
}))

const Header = ({ changeSearch, handleSearchClick, search, title }) => {
    return (
        <React.Fragment>
            <AppBar sx={{ background: 'rgba(228, 80, 29, 1)', justifyContent: 'center', height: 88 }} position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to='/'>
                            <img style={{ width: 150, height: 70, borderRadius: 15 }} src={background} alt='logo' />
                        </Link>
                    </IconButton>
                    <Typography className='info1' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to BVM Developer
                    </Typography>
                    <Box className='info'>
                        <Typography sx={{ fontweight: 500, fontSize: 14, fontFamily: 'Poppins' }}>
                            APEX DRY FRUIT STORES JUBILEE BAUG: +91 9978124242
                        </Typography>
                        <Typography sx={{ fontweight: 500, fontSize: 14, fontFamily: 'Poppins' }}>
                            APEX DRY FRUIT STORES OP ROAD : +91 9662591504
                        </Typography>
                        <Typography>
                            adfs_apex@yahoo.co.in
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <MainBox>
                <Grid sx={{ p: 2 }} container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography className='title' sx={{ fontSize: 48, fontWeight: 400, fontFamily: 'pridi', p: 2, color: 'white', textAlign: 'center' }}>
                            Search What You Like
                        </Typography>
                        <Typography className='SubTitle' sx={{ fontSize: 16, fontWeight: 400, fontFamily: 'Poppins', p: 1, color: 'white', textAlign: 'center' }}>
                            Find specials masalas what you like
                        </Typography>
                    </Grid>
                </Grid>

                <Stack sx={{ p: 2 }} spacing={2} direction={{ xs: 'column', sm: 'row' }} display="flex" justifyContent="center" alignItems="center">
                    <Typography className='textInput'>
                        <input className='MainInput' style={{ background: 'white', width: 302, height: 48, borderRadius: 10, paddingLeft: 15 }} placeholder='i would like to search?' onChange={changeSearch} />
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 15, p: 1, background: 'rgba(228, 80, 29, 1)', fontWeight: 700, width: 152, height: 40, borderRadius: 2, color: 'white' }}
                        onClick={(e) => handleSearchClick(search)}
                    >
                        search  <SearchIcon style={{ marginLeft: 7 }} />
                    </Box>
                </Stack>
            </MainBox>
            <SubTitle className='sub-title'>
                <Title className='categary-name'>
                    {title}
                </Title>
            </SubTitle>
        </React.Fragment>
    );
}
export default Header;
