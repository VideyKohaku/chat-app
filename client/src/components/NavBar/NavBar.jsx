import { useContext } from 'react'
import { Container, Typography, Stack, Button } from "@mui/material"
import { Link } from 'react-router-dom'
import navbar_styles from './navbar.style'
import { AuthContext } from '../../context/AuthContext'

function NavBar() {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <Container
            sx={navbar_styles.body}
            maxWidth={false}
        >
            <Link to={"/"}
                style={{
                    ...navbar_styles.titleLink,
                    ...navbar_styles.link
                }}>
                <Typography sx={navbar_styles.title}>SoraChat</Typography>
            </Link>
            <Container
                sx={navbar_styles.statusBox}
            >
                <Typography
                    sx={{
                        ...navbar_styles.typo,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >You are logging as {user ? `${user.name}` : `Guest`}</Typography>
            </Container>
            <Stack
                direction={"row"}
                spacing={2}
                sx={navbar_styles.auth}
            >
                {
                    user && (<>
                        <Link to={"/login"}
                            onClick={logoutUser}
                            style={navbar_styles.link}
                        >
                            <Button
                                size="medium"
                                sx={{ fontSize: 6 }}
                            >
                                <Typography
                                    sx={{
                                        ...navbar_styles.typo,

                                    }}
                                >Logout</Typography>
                            </Button>
                        </Link>
                    </>)
                }

                {
                    !user && (<>
                        <Link to={"/login"}
                            style={navbar_styles.link}
                        >
                            <Button
                                size='medium'
                                sx={{ fontSize: 6 }}
                            >
                                <Typography
                                    sx={{
                                        ...navbar_styles.typo,

                                    }}
                                >Login</Typography>
                            </Button>
                        </Link>
                        <Link to={"register"}
                            style={navbar_styles.link}
                        >
                            <Button size='small'
                                sx={{ fontSize: "15px" }}
                            >
                                <Typography
                                    sx={navbar_styles.typo}
                                >Register</Typography>
                            </Button>
                        </Link>
                    </>)
                }
            </Stack>
        </Container>
    )
}

export default NavBar