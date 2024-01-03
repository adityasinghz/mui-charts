import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Grid, Button, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


export default function Actionbar({ toggleColorMode }) {
    const theme = useTheme();
    return (
        <Grid item sx={12} md={12}>
            <Box sx={{ flexGrow: 1 }}>
                <Paper>
                    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: theme.palette.text.primary }}
                            >
                                My Charts
                            </Typography>
                            <Button variant="contained" sx={{ ml: 1 }} onClick={toggleColorMode}>
                                {theme.palette.mode === 'dark' ? "Disable Dark Mode" : "Enable Dark Mode"}
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Paper>
            </Box>
        </Grid>
    );
}
