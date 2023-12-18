import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const WelcomeScreen = ({ onStartQuiz }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <Box
                sx={{
                    border: '2px solid #ccc',
                    borderRadius: '50px',
                    padding: '20px',
                    marginTop: '10px',
                    margin: '50px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(240, 255, 255, 0.7)'
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Świąteczny Quiz!
                </Typography>
                <Typography variant="h7" gutterBottom display="block" align="left">
                    &nbsp;&nbsp;&nbsp;&nbsp;Chyba nie myślałaś ze drugi prezent będzie całkowicie za darmo? Nie ma tak łatwo. <br/> <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Moze twój nerdowski chłop nie namaluje ci obrazu, nie zrobi magnesu ani, nie zagra ci na gitarze, ale za to moze umilić ci rozpakowywanie prezentu tym tandetnym quizem (prosze docenić) <br/> <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Zasady są proste, musisz odpowiedzieć na 8 banalnych pytań. Niby mozesz powtarzać podejścia ale nie oszukujmy się, jeśli będziesz musiała to będzie troche zalosne. Powodzenia słońce! <br/><br/>
                </Typography>
                <Button variant="contained" color="primary" onClick={onStartQuiz} sx={{ width: '200px' }}>
                    Rura
                </Button>
            </Box>
        </Box>
    );
};

export default WelcomeScreen;
