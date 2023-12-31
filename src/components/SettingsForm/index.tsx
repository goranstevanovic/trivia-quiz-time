import { useQuiz } from '../../contexts/QuizContext';
import {
  QuizNumberOfQuestions,
  QuizQuestionCategory,
  QuizQuestionDifficulty,
} from '../../contexts/QuizContext.types';
import Button from '../Button';
import styles from './SettingsForm.module.css';

export default function SettingsForm() {
  const { numberOfQuestions, category, difficulty, dispatch } = useQuiz();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();

        if (dispatch) {
          dispatch({ type: 'startQuiz' });
        }
      }}
    >
      {/* <div>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          maxLength={30}
          required
          onChange={(e) => {
            if (dispatch) {
              dispatch({ type: 'saveName', payload: e.target.value });
            }
          }}
        />
      </div> */}

      <div>
        <label htmlFor="questions-quantity">Number of questions</label>
        <select
          id="questions-quantity"
          value={numberOfQuestions}
          onChange={(e) => {
            if (dispatch) {
              dispatch({
                type: 'saveNumberOfQuestions',
                payload: e.target.value as QuizNumberOfQuestions,
              });
            }
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => {
            if (dispatch) {
              dispatch({
                type: 'saveCategory',
                payload: e.target.value as QuizQuestionCategory,
              });
            }
          }}
        >
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
      </div>

      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => {
            if (dispatch) {
              dispatch({
                type: 'saveDifficulty',
                payload: e.target.value as QuizQuestionDifficulty,
              });
            }
          }}
        >
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <Button>Start Quiz</Button>
    </form>
  );
}
