import { useState } from "react";
import '../styles/Header.css';
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 240;

function DrawerAppBar({ header, window, navButtons }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const mainTheme = createTheme({
        palette: {
            primary: {
                light: '#61815d',
                main: '#3d503b',
                dark: '#232e21',
                contrastText: '#000',
            }
        },
    });

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            textAlign="center"
        >
            <p className="h2">
                {header}
            </p>
            <Divider style={{ backgroundColor: '#000' }} />
            <List>
                {navButtons.map((item) => {
                    return (
                        <ListItem
                            key={item.name}
                            disablePadding
                        >
                            <ListItemButton
                                sx={{ textAlign: 'center' }}
                            // якорь!
                            >
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                component="nav"
                style={{
                    backgroundColor: '#61815d',
                    display: 'flex',
                    color: '#000'
                }}
                sx={{
                    alignItems: {
                        xs: 'flex-start',
                        sm: 'flex-start',
                        md: 'flex-start',
                        lg: 'center'
                    }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 1, display: { md: 'block', lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <p className="h1">
                        {header}
                    </p>
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'none',
                                lg: 'flex'
                            }
                        }}
                    >
                        {navButtons.map((item) => {
                            return (
                                <Button
                                    variant='contained'
                                    key={`button${navButtons.indexOf(item)}`}
                                    sx={{
                                        mx: 0.7,
                                        height: '3em'
                                    }}
                                    theme={mainTheme}
                                    className='anchorLink'
                                // якорь!
                                >
                                    {item.name}
                                </Button>
                            )
                        })
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: '#61815d',
                            color: '#000',
                            fontWeight: 500
                        }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;