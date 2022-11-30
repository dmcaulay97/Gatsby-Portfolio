import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton, Grid, Link } from '@mui/material';

const Social = ({ direction }) => {

    const socialItems = [
        { icon: GitHubIcon, url: "" },
        { icon: TwitterIcon, url: "" },
        { icon: LinkedInIcon, url: "" }
    ]

    return (
        <Grid container direction={direction || "row"} spacing={1}>
            {socialItems.map((item) => (
                <Grid item>
                    <Link href={item.url}>
                        <IconButton>
                            <item.icon />
                        </IconButton>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default Social