import Button from '../Button';
import Question from '../Question';

export default function QuizScreen() {
  return (
    <div>
      <div>
        <p>
          Question <strong>25/50</strong>
        </p>
        <div>
          <p>Points</p>
          <p>1,000</p>
        </div>
      </div>

      <Question />

      <Button size="small">Next Question</Button>
    </div>
  );
}
