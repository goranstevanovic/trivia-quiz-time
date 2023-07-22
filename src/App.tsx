import StartScreen from './components/StartScreen';
import SettingsScreen from './components/SettingsScreen';
import { useQuiz } from './contexts/QuizContext.tsx';
import LoadingScreen from './components/LoadingScreen/index.tsx';
import ErrorScreen from './components/ErrorScreen/index.tsx';
import QuizScreen from './components/QuizScreen/index.tsx';
import ResultsScreen from './components/ResultsScreen/index.tsx';

function App() {
  const { status } = useQuiz();

  return (
    <>
      {status === 'inactive' && <StartScreen />}
      {status === 'showSettings' && <SettingsScreen />}
      {status === 'loading' && <LoadingScreen />}
      {status === 'error' && <ErrorScreen />}
      {status === 'active' && <QuizScreen />}
      {status === 'finished' && <ResultsScreen />}
    </>
  );
}

export default App;
