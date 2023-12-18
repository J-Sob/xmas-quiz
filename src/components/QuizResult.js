import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const QuizResult = ({ score, totalQuestions, restartQuiz }) => {

    const rewardUrl = "https://drive.google.com/file/d/1jYVk7chO4ig83KqVMyjD8Hwe51ytXOfn/view?usp=drive_link"

    const reward = () => {
        window.location.href = rewardUrl
    };

    const allCorrect = score === totalQuestions;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    border: '2px solid #ccc',
                    borderRadius: '50px',
                    padding: '40px',
                    textAlign: 'center',
                    margin: '20px',
                    backgroundColor: 'rgba(240, 255, 255, 0.7)'
                }}
            >
                {allCorrect ? <Typography variant="h4" gutterBottom> Gratulacje! </Typography> : <Typography variant="h4" gutterBottom> Serio Nina? Nie mam słów. </Typography>}
                <Typography variant="h6" gutterBottom>
                    Wynik: {score} / {totalQuestions}
                </Typography>
                {allCorrect ?
                    <Typography variant="h7" gutterBottom display="block" align="left">
                        &nbsp;&nbsp;&nbsp;&nbsp;No tym razem ci sie udało, powiedzmy ze zasłuzyłaś. <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Nagroda moze nie jest jakimś super oryginalnym prezentem ale mam nadzieję ze sprawi ci trochę szczęścia. Wesołych świąt słońce. Dziękuje ze jesteś. &hearts; <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;PS: Pamiętasz chociaz datę naszej rocznicy? <br/><br/>
                        </Typography> :
                    <Typography variant="h6" gutterBottom> Mogłabyś się chociaz postarac wiesz? </Typography>}
                {allCorrect ?
                    <Button variant="contained" color="success" sx={{ width: '200px' }} onClick={reward}>Nagroda</Button> :
                    <Button variant="contained" color="error" sx={{ width: '200px' }} onClick={restartQuiz}>Powtórz</Button>}
            </Box>
        </Box>
    );
};

export default QuizResult;
