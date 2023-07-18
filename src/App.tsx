import StartScreen from './components/StartScreen';
import SettingsScreen from './components/SettingsScreen';
import { useQuiz } from './contexts/QuizContext.tsx';

function App() {
  const { status } = useQuiz();

  return (
    <>
      {status === 'inactive' && <StartScreen />}
      {status === 'settings' && <SettingsScreen />}
    </>
  );
}

export default App;
