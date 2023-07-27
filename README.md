# Trivia Quiz Time

## About

Trivia Quiz Time is an online trivia quiz app that allows users to test their knowledge of various facts.

## Features

- Select the number of questions, questions category, and questions difficulty
- Get the result based on the total correct answers and the total number of points

# Technologies used

- CSS Modules
- ESLint
- GitHub Actions
- Prettier
- React
- React Testing Library
- TypeScript
- Vitest

## Demo

You can check out a live demo of the application at [https://www.triviaquiztime.com/](https://www.triviaquiztime.com/).

## How I worked on this project

My goal with this project was to simulate a professional work environment.

- I designed the app using Figma: [view design](https://www.figma.com/file/XLdB0hZXMY4cBWAkDoujMr/Design?type=design&node-id=2%3A113&mode=design&t=uS72NYp21krRhQ6C-1)
- I worked with tasks in GitHub Projects: [view tasks](https://github.com/users/goranstevanovic/projects/7/views/1)
- I used feature branches and pull requests: [example PR](https://github.com/goranstevanovic/trivia-quiz-time/pull/50)
- I practiced test-driven development: [example test](https://github.com/goranstevanovic/trivia-quiz-time/blob/main/src/components/SettingsScreen/SettingsScreen.test.tsx)

## How to navigate this project

- Example of managing local state (using Context API and useReducer): [view code](https://github.com/goranstevanovic/trivia-quiz-time/blob/main/src/contexts/QuizContext.tsx#L48-L236)
- Example of fetching data from the third-party API (using JavaScript Fetch): [view code](https://github.com/goranstevanovic/trivia-quiz-time/blob/main/src/contexts/QuizContext.tsx#L180-L203)

## Getting started

To run this app locally, you'll need to have a `Noje.js` and an `npm` installed. Once you have those installed, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/goranstevanovic/trivia-quiz-time.git`
1. Navigate to the project directory:  
   `cd trivia-quiz-time`
1. Install dependencies:  
   `npm install`
1. Start the app:  
   `npm run dev`

## Usage

1. Click the `Let's Play` button to configure the quiz.
1. Select the number of questions that you want, the questions category, and the questions difficulty.
1. Click the `Start Quiz` button to start the quiz.
1. Answer the questions by clicking/tapping on the answer.
1. Once you answer all the questions, your results will be shown. The results will show the total number of correct questions and the total number of points (points differ by question difficulty).
1. If you want to play again, click the `Play Again` button.
