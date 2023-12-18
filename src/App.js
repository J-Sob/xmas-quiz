import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Quiz from './components/Quiz';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const playBackgroundAudio = () => {
    const audio = new Audio("https://drive.google.com/uc?export=download&id=1466y2nGUX7bih0opzb2JPInLiZOCr359")
    audio.loop = true
    audio.play()
  };

  const questions = [
    {
      question: 'Na rozgrzewkę. Skąd pochodził Święty Mikołaj?',
      options: [
        { text: 'Finlandia', isCorrect: false },
        { text: 'Laponia', isCorrect: false },
        { text: 'Mira Licyjska', isCorrect: true },
        { text: 'Bałuty', isCorrect: false },
      ],
    },
    {
      question: 'Jaka jest jedyna poprawna forma wyrazenia "iksde"?',
      options: [
        { text: 'xd', isCorrect: false },
        { text: 'XD', isCorrect: true },
        { text: 'Xd', isCorrect: false },
        { text: 'X D', isCorrect: false },
      ],
    },
    {
      question: 'Jaka nazywa się wyimaginowany pies Kubusia?',
      options: [
        { text: 'Burek', isCorrect: false },
        { text: 'Azor', isCorrect: false },
        { text: 'Fifi', isCorrect: true },
        { text: 'Fufu', isCorrect: true }
      ],
    },
    {
      question: 'Najlepsza piosenka Rihanny?',
      options: [
        { text: 'SOS', isCorrect: true },
        { text: 'SOS', isCorrect: true },
        { text: 'Umbrella (🤮)', isCorrect: false },
        { text: 'SOS', isCorrect: true }
      ],
    },
    {
      question: 'Tu nawet pytania nie zadam',
      options: [
        { image_src: 'https://drive.google.com/uc?export=download&id=19kEjrIlW9K5iuv8N6j7WSZ7BkfX0XkgT', isCorrect: false },
        { image_src: 'https://drive.google.com/uc?export=download&id=11OfRp0YOLq1KnHYHhjPTeliZnGfy0MEN', isCorrect: true },
        { image_src: 'https://drive.google.com/uc?export=download&id=1Ouy_zlhh8NpyjM0g-ew3ZTTc2nwXISKI', isCorrect: false },
        { image_src: 'https://drive.google.com/uc?export=download&id=1suuUethJfkwcjZbd0Y7xsEb8iDvAjAkf', isCorrect: false }
      ],
    },
    {
      question: 'Oblicz całkę: ∫ x^2 e^x dx',
      options: [
        { text: 'e^x(x^2−2x+2)+C', isCorrect: true },
        { text: '1', isCorrect: false },
        { text: 'jaszczur', isCorrect: false },
        { text: 'xe^x−e^x+C', isCorrect: false }
      ],
    },
    {
      question: 'Ile tatuazy ma Kuba?',
      options: [
        { text: '7', isCorrect: false },
        { text: '10', isCorrect: false },
        { text: '8', isCorrect: false },
        { text: '9', isCorrect: true }
      ],
    },
    {
      question: 'Szły gęsi gęsiego – jedna za drugą. Ile było gęsi?',
      options: [
        { text: '2', isCorrect: false },
        { text: '3', isCorrect: true },
        { text: '4', isCorrect: false },
        { text: '1', isCorrect: false }
      ],
    },
  ];

  useEffect(() => {
    playBackgroundAudio()
  }, [])

  return (
    <div>
      {!quizStarted ? (
        <WelcomeScreen onStartQuiz={startQuiz} />
      ) : (
        <Quiz questions={questions} />
      )}
    </div>
  );
};

export default App;
