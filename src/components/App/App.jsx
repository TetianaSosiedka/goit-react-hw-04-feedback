import { useFeedback } from '../../hooks/UseFeedback';

import { Container } from './App.styled';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';

export const App = () => {
  const { good, neutral, bad, setFeedback } = useFeedback('');

  const total = good + neutral + bad;

  const positivePercentage = total > 0 ? ((good * 100) / total).toFixed(0) : 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={({ target }) => setFeedback(target.dataset.name)}
          buttonsName={['good', 'neutral', 'bad']}
        />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </Container>
  );
};
