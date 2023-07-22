export default function ErrorScreen() {
  const message =
    'Something went wrong while trying to get questions and answers for your game of quiz. Please try again.';

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
