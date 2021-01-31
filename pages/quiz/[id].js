import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>

      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projeto, autor] = context.query.id.split('_');
  try {
    const dbExterno = await fetch(`https://${projeto}.${autor}.vercel.app/api/db`)
      .then((re) => {
        if (re.ok) {
          return re.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((reObj) => reObj);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
