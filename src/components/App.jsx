import {useState} from 'react';
import Section from './Section/Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification';

const App  = () => {
  const [good, setGood] = useState (0);
  const [neutral,  setNeutral] = useState (0);
  const [bad, setBad] = useState (0);
  const feedbackItems ={good, neutral, bad};

  const onLeaveFeedback = el => {
    switch (el) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('there is no such option');
        break;
    }
  };


  const countTotalFeedback = () =>  {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        marginLeft: 30,
      }}>

      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackItems}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
    
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
              ) : (
                <Notification message="There is no feedback"></Notification>
              )}
      </Section>
    </div>
  );
};

export default App;



// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = el => {
//     this.setState(prevstate => ({
//       [el]: prevstate[el] + 1,
//     }));
//   };
//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }
//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   }
//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           fontSize: 40,
//           color: '#010101',
//           marginLeft: 30,
//         }}
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
