import Button from '../Button';

export default function ResultsScreen() {
  return (
    <div>
      <div>
        <h1>Results</h1>
        <div>
          <h2>Total correct answers:</h2>
          <p>40/50 &ndash; 80%</p>
        </div>
        <div>
          <h2>Total points:</h2>
          <p>1,000/1,500 &ndash; 67%</p>
        </div>
      </div>

      <Button>Play Again</Button>
    </div>
  );
}
