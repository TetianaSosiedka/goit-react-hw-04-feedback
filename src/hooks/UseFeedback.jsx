import { useState } from 'react';

export const useFeedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setFeedback = targetName => {
    switch (targetName) {
      case 'good':
        setGood(good + 1);

        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        new Error('Unknown variable name');
        break;
    }
  };

  return { good, neutral, bad, setFeedback };
};
