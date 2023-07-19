import StartScreen from './components/StartScreen';
import SettingsScreen from './components/SettingsScreen';
import { useQuiz } from './contexts/QuizContext.tsx';
import LoadingScreen from './components/LoadingScreen/index.tsx';
import QuizScreen from './components/QuizScreen/index.tsx';

function App() {
  const { status } = useQuiz();

  return (
    <>
      {status === 'inactive' && <StartScreen />}
      {status === 'showSettings' && <SettingsScreen />}
      {status === 'loading' && <LoadingScreen />}
      {status === 'active' && <QuizScreen />}
    </>
  );
}

export default App;
