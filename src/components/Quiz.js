import React, { useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import Result from './QuizResult';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswerChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextQuestion = () => {
        const isCorrect = questions[currentQuestion].options[selectedOption].isCorrect;
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
    };

    if (showResult) {
        return (
            <Result
            score={score}
            totalQuestions={questions.length}
            restartQuiz={restartQuiz}
          />
        );
    }

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
                    backgroundColor: 'rgba(240, 255, 255, 0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    margin: '50px',
                    gap: '20px',
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Pytanie {currentQuestion + 1}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {questions[currentQuestion].question}
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup
                        value={selectedOption}
                        onChange={handleAnswerChange}
                    >
                        {questions[currentQuestion].options.map((option, index) => (
                            <FormControlLabel
                                key={index}
                                value={index.toString()}
                                control={<Radio />}
                                label={option.text != null ? (option.text) : (<img src={option.image_src} alt={`Option ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />) }
                                sx={{ justifyContent: 'flex-start' }}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
                
                <Button variant="contained" color="primary" onClick={handleNextQuestion} sx={{ width: '200px' }} disabled={selectedOption === null}>
                    {currentQuestion < questions.length - 1 ? 'Następne' : 'Koniec'}
                </Button>
            </Box>
        </Box>
    );
};

export default Quiz;

