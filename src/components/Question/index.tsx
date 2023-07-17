const question = {
  category: 'General Knowledge',
  type: 'multiple',
  difficulty: 'easy',
  question:
    'Which of the following card games revolves around numbers and basic math?',
  correct_answer: 'Uno',
  incorrect_answers: ['Go Fish', 'Twister', 'Munchkin'],
};

const answers = [question.correct_answer, ...question.incorrect_answers];

export default function Question() {
  return (
    <div>
      <header>
        <p>{question.category}</p>
        <p>{question.difficulty}</p>
      </header>
      <p>{question.question}</p>
      <ul>
        {answers.map((answer) => (
          <li>{answer}</li>
        ))}
      </ul>
    </div>
  );
}
