import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function App({ setMode }) {
    const handleThemeToggle = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    Demo
                </Typography>
                <Button onClick={handleThemeToggle} color="inherit">
                    Toggle Theme
                </Button>
            </Box>
        </Container>
    );
}
