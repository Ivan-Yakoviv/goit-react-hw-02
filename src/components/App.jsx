import { useState, useEffect } from 'react';
import './App.css';
import Description from './Description/Description.jsx';
import Feedback from './Feedback/Feedback.jsx';
import Options from './Options/Options.jsx';

const App = () => {

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback ||
    {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  

  return (
    <>
      <Description />
      <Options
      updateFeedback={updateFeedback}
      />
      <Feedback
      feedback={feedback}
      />
    </>
  )
}

export default App
