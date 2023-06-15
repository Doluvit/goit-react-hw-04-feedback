import { Feedback } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';
import { MainContainer } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const hadleClick = key => {
    switch (key) {
      case 'good':
        setGood( prev => prev + 1 );
        break;
      case 'neutral':
        setNeutral( prev => prev + 1 );
        break;
      case 'bad':
        setBad( prev => prev + 1 );
        break;
      default:
        throw new Error();
    }
  };

  const options = Object.keys({ good, neutral, bad });
  const total = good + neutral + bad;
  const percentages = Math.round((good / total) * 100);

  return (
    <MainContainer>
      <Section title="Please leave feedback">
        <Feedback options={options} hadleClick={hadleClick}></Feedback>
      </Section>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback!" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentages}
          />
        )}
      </Section>
    </MainContainer>
  );
};
