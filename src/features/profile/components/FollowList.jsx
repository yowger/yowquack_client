import { useTheme } from "@emotion/react"
import { Box, Grid, useMediaQuery } from "@mui/material"
import FollowerInfo from "./FollowerInfo"

function FollowList({ users }) {
    const theme = useTheme()
    const isMediumScreenAndBelow = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Grid
            container
            // sx={{
            //     display: "flex",
            //     justifyContent: isMediumScreenAndBelow
            //         ? "initial"
            //         : "space-between",
            // }}
        >
            {users?.map((follower, index) => (
                <Grid key={index} item xs={3}>
                    <FollowerInfo key={index} name={follower.name} />
                </Grid>
            ))}
        </Grid>
    )
}

export default FollowList
