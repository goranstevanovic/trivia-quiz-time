import StartScreen from './components/StartScreen';
import SettingsScreen from './components/SettingsScreen';
import { useQuiz } from './contexts/QuizContext';

function App() {
  const quizContext = useQuiz();

  const status = quizContext?.status;

  return (
    <>
      {status === 'finished' && <StartScreen />}
      {status === 'settings' && <SettingsScreen />}
    </>
  );
}

export default App;
