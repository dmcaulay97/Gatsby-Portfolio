import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Container, Grid, Fade } from '@mui/material';
import Social from './Social';
import { StaticImage } from 'gatsby-plugin-image';

const StyledPaper = styled(Paper, {})({
    height: "90vh",
    position: "relative",
});

const StyledContainer = styled(Container, {})({
    height: "100%",
})

const StyledGrid = styled(Grid, {})({
    height: "100%",
    zIndex: 100,
    position: "relative"
})

const Overlay = styled('div', {})({
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1
})


const HeroSection = () => {
    const [shouldShow, setShouldShouw] = useState(false)
    useEffect(() => setShouldShouw(true))

    return (
        <StyledPaper>
            <StaticImage
                src="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%"

                }} />
            <Overlay style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></Overlay>
            <StyledContainer maxWidth="md">
                <StyledGrid
                    container
                    alignItems={"center"}
                    justifyContent="space-between"
                >
                    <Fade in={shouldShow} style={{ transitionDuration: '1500ms' }}>
                        <Grid item sm={10}>
                            <Typography component="h1" variant="h3">
                                Dylan McAulay | Web Developer
                            </Typography>
                            <Typography variant="h5">
                                Building Beautiful Websites.
                            </Typography>
                            <Box my={2}>
                                <Button variant="outlined" color="secondary" href='mailto:dmcaulay97@gmail.com'>
                                    Contact Me
                                </Button>
                            </Box>
                        </Grid>
                    </Fade>
                    <Fade in={shouldShow} style={{ transitionDuration: '2700ms' }}>
                        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Social direction="column" />
                        </Grid>
                    </Fade>
                </StyledGrid>
            </StyledContainer>
        </StyledPaper>
    )
};

export default HeroSection;
